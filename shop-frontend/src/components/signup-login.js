import React, { Component } from 'react'
import axios from "axios";

 class SignupLogin extends Component {

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
            <div>
                {this.state.product}
            </div>
        )
    }
}

export default SignupLogin;
