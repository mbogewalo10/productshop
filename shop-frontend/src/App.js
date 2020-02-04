import React from 'react';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';


import CreateProduct from "./components/create-products";
import ProductList from "./components/product-list";
import EditProduct from "./components/edit-products";
import SignupLogin from "./components/signup-login";

function App() {
  return (
     <Router>
       <div  className="App" >
              <header  >
                     <Navbar bg="dark" variant="dark" >
                           <Container>
                             <Navbar.Brand>
                               <Link to={"/create-product"} className="nav-link" > PRODUCT SHOP </Link>
                             </Navbar.Brand>

                             <Nav  className="justify-content-end" >
                                  <Nav>
                                    <Link to={"/create-product"} className="nav-link"  > CREATE PRODUCT </Link>
                                  </Nav>
                                  
                                  <Nav>
                                    <Link  to={"/product-list"} className="nav-link" > PRODUCT LIST</Link>
                                  </Nav>

                                  <Nav>
                                    <Link  to={"/signup"} className="nav-link" >LOGIN</Link>
                                  </Nav>
                             </Nav>
                             
                      
                           </Container>
                     </Navbar>
              </header>

                        <Container>
                          <Row>
                            <Col md={12} >
                                  <div className="wrapper" >
                                      <Switch>
                                        <Route exact path="/"  component={CreateProduct} ></Route>
                                        <Route  path="/create-product"  component={CreateProduct} ></Route>
                                        <Route  path="/product-list"  component={ProductList} ></Route>
                                        <Route  path="/edit-product"  component={EditProduct} ></Route>
                                        <Route  path="/signup"  component={SignupLogin} ></Route>
                                      </Switch>
                                  </div>
                            </Col>
                          </Row>
                        </Container>

       </div>
     </Router>
  );
}

export default App;
