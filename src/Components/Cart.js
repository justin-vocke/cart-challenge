import React from 'react';
import './cart.css';
import {
    Card, CardHeader, CardFooter, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container, Row, Col
  } from 'reactstrap';
  import { FaShoppingCart, FaTrashAlt } from "react-icons/fa";

const Cart = () => {
    return (
        
            <Container>
                <Card sm="12" md={{ size: 8, offset: 2 }}>
                    <CardHeader>
                        <Row>
                            <Col sm="12" md="4">
                            <h5 className="cart-header-icon"><span className="cart-icon"><FaShoppingCart/></span> Shopping Cart</h5>
                            </Col>
                            <Col sm="12" md={{ size: 4, offset: 4 }}>
                            <Button className="shopping-btn">Continue Shopping</Button>
                            </Col>
                        
                        </Row>
                        
                    </CardHeader>
                    <CardBody>
                        <Row>
                        <Col xs="6" sm="2">
                        <img class="img-responsive" src="http://placehold.it/100x70"></img>
                        </Col>
                        <Col xs="6" sm="4">
                        <h4 className="product-name"><strong>Product name</strong></h4><h4><small>Product description</small></h4>
                        </Col>
                        <Col xs="12" sm="6" style={{marginTop:"10px"}}>
                            <Row>
                            <Col xs="6" className="text-right" style={{marginTop:"10px"}}>
                            <h6><strong>25.00 <span class="text-muted">x</span></strong></h6>
                            </Col>
                            <Col xs="4">
                                <input type="text" class="form-control input-sm" value="1"/>
                            </Col>
                            <Col xs="2">
                                <Button size="xs"><FaTrashAlt/></Button>
                            </Col>
                            </Row>
                        </Col>
                        </Row>
                        
                    </CardBody>
                </Card>
            </Container>
        
    )
}

export default Cart;
