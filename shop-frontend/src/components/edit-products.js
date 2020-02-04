import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

 class EditProduct extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             productName : "",
             price: "",
             quantity: ""

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    componentDidMount() {
        axios.get('http://localhost:3002/products/' + this.props.match.params.id)
          .then(res => {
            this.setState({
              productName: res.data.createdProduct.products.productName,
              price: res.data.createdProduct.products.price,
              quantity: res.data.createdProduct.products.quantity
            });
            console.log(res.data.createdProduct.products)
          })
          .catch((error) => {
            console.log(error);
          })
      }


    handleChange(event){
        const {name,value} = event.target
        this.setState({
            [name]:value
        })
     }

     handleSubmit(e){
        e.preventDefault()
    
        const userObject = {
            productName : this.state.productName,
            price: this.state.price,
            quantity: this.state.quantity
        }
    
      axios.patch("http://localhost:3002/products" + this.props.match.params.id, userObject)
      .then(result =>{
        //   console.log(result)
          console.log('Product successfully updated')
    
      })
      .catch(err =>{
          console.log(err)
      });

    //   this.props.history.push('/product-list')
    
    }

    render() {
        return (
            <div className="form-wrapper" >
                <Form className="form-style" onSubmit={this.handleSubmit} >
                    <Form.Group controlId="productName" >
                         <Form.Label>PRODUCT NAME</Form.Label>
                         <Form.Control type="text" name="productName" value={this.state.productName}  onChange={this.handleChange}  /> 
                    </Form.Group>

                    <Form.Group controlId="price" >
                         <Form.Label>PRICE</Form.Label>
                         <Form.Control type="text" name="price"  value={this.state.price} onChange={this.handleChange}   /> 
                    </Form.Group>

                    <Form.Group controlId="quantity" >
                         <Form.Label>QUANTITY</Form.Label>
                         <Form.Control type="text" name="quantity" value={this.state.quantity}  onChange={this.handleChange} /> 
                    </Form.Group>
                    <Button variant="danger" size="lg" block="block" type="submit" onClick={this.handleSend}  >
                               Update Student
                    </Button>

                </Form>  
            </div>
        )
    }
}

export default EditProduct;
