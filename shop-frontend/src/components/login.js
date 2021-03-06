import React, { Component } from 'react'
import axios from "axios";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import "./Stylesheets.css"

 class Login extends Component {

    constructor(props){
        super(props)
        this.state = {productCollection: [] };
    }
  
    render() {
        return (
            <div className="form-wrapper" >
            <Form className="form-style" onSubmit={this.handleSubmit} >
               
                <Form.Group controlId="price" >
                     <Form.Label>EMAIL ADDRESS</Form.Label>
                     <Form.Control type="email" name="email" placeholder="Email"  value={this.state.email} onChange={this.handleChange}   /> 
                </Form.Group>
                <Form.Group controlId="password" >
                     <Form.Label>PASSWORD</Form.Label>
                     <Form.Control type="password" name="password" placeholder="Password"  value={this.state.password} onChange={this.handleChange}   /> 
                </Form.Group>


     <Button variant="danger" size="lg" block="block" type="submit"  onClick={this.handleSend}>LOGIN</Button>
     <p className="forgot-password text-right"> FORGOT <a href="#">PASSWORD</a></p>
    
            </Form>  
        </div>
        )
    }
}

export default Login;
