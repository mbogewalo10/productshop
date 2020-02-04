import React, {Component} from 'react';
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import axios from "axios"

import "./Stylesheets.css"

class CreateProduct extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             productName : "",
             price: "",
             quantity:""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSend = this.handleSend.bind(this)
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
    
      axios.post("http://localhost:3002/products", userObject)
      .then(result =>{
          console.log(result.data)
    
      })
      .catch(err =>{
          console.log(err)
      });
    
    }
    handleSend(){
     alert(`You successfully sent ${this.state.productName} costing  ${this.state.price} euros with quantity ${this.state.quantity} `)
    }
 

    render(){
        return(
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
                               Create Product
                    </Button>

                </Form>  
            </div>
        )
    }
}

export default CreateProduct;