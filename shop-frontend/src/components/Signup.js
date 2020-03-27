import React, { Component } from 'react'
import axios from "axios";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import "./Stylesheets.css"

 class Signup extends Component {

    constructor(props){
        super(props)
        this.state = {productCollection: [] };
    }
  
    componentDidMount(){
        axios.get("http://localhost:3002/products/")
        .then(res => {
            this.setState({productCollection: res.data.createdProduct.products});
            console.log(res.data.createdProduct.products)
        })
        .catch((error) =>{
            console.log(error);
        })
    }


    

    render() {
        return (
            <div className="form-wrapper" >
            <Form className="form-style" onSubmit={this.handleSubmit} >
                <Form.Group controlId="productName" >
                     <Form.Label>FIRST NAME</Form.Label>
                     <Form.Control type="text" name="firstname"  placeholder="First Name" value={this.state.firstname}  onChange={this.handleChange}  /> 
                </Form.Group>
                <Form.Group controlId="productName" >
                     <Form.Label>LAST NAME</Form.Label>
                     <Form.Control type="text" name="lastname"  placeholder="Last Name" value={this.state.lastname}  onChange={this.handleChange}  /> 
                </Form.Group>

                <Form.Group controlId="price" >
                     <Form.Label>EMAIL ADDRESS</Form.Label>
                     <Form.Control type="email" name="email" placeholder="Email"  value={this.state.email} onChange={this.handleChange}   /> 
                </Form.Group>
                <Form.Group controlId="price" >
                     <Form.Label>PASSWORD</Form.Label>
                     <Form.Control type="password" name="password" placeholder="Password"  value={this.state.password} onChange={this.handleChange}   /> 
                </Form.Group>

                

     <Button variant="danger" size="lg" block="block" type="submit"  onClick={this.handleSend}> REGISTER</Button>
     <p className="forgot-password text-right"> Already registered <a href="/login">Sign In?</a> </p>
            </Form>  
        </div>
        )
    }
}

export default Signup;
