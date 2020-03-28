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
import Signup from "./components/Signup";
import Login from "./components/login"
import homeCard from "./components/home"
const styles = {
  header: {
    backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeiF7nMwP-MSiNmsbbf2kDneK_bLQ8SidSRfl-Hezb5WEFlcfx)',
    height: '100vh',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },

  content: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white'
  }
}

function App() {
  return (
     <Router>
       <div  className="App" style={styles.header} >
              <header  >
                     <Navbar bg="dark" variant="dark" >
                           <Container>
                             <Navbar.Brand>
                               <Link to={"/create-product"} className="nav-link" > PRODUCT SHOP </Link>
                             </Navbar.Brand>

                             <Nav  className="justify-content-end" >
                                  <Nav>
                                    <Link to={"/"} className="nav-link"  > HOME </Link>
                                  </Nav>

                                  <Nav>
                                    <Link to={"/create-product"} className="nav-link"  > CREATE PRODUCT </Link>
                                  </Nav>
                                  
                                  
                                  <Nav>
                                    <Link  to={"/product-list"} className="nav-link" > PRODUCT LIST</Link>
                                  </Nav>
                                  <Nav>
                                    <Link  to={"/login"} className="nav-link" > LOGIN</Link>
                                  </Nav>
                                  <Nav>
                                    <Link  to={"/signup"} className="nav-link" > SIGN UP</Link>
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
                                        <Route exact path="/"  component={homeCard} ></Route>
                                        <Route  path="/create-product"  component={CreateProduct} ></Route>
                                        <Route  path="/product-list"  component={ProductList} ></Route>
                                        <Route  path="/edit-product/:id"  component={EditProduct} ></Route>
                                        <Route  path="/login"  component={Login} ></Route>
                                        <Route  path="/signup"  component={Signup} ></Route>
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
