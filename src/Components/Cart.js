import React, {useState} from 'react';
import './cart.css';
import {
    Card, CardHeader, CardFooter, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container, Row, Col
  } from 'reactstrap';
  import { FaShoppingCart, FaTrashAlt } from "react-icons/fa";
import {Link} from 'react-router-dom';

const Cart = () => {
    const [count1, setCount1] = useState(1);
    const [count2, setCount2] = useState(1);
    const price1 = 25;
    const [total, setTotal]= useState(count1*price1+count2*price1);
    
    const priceCurrency= price1.toFixed(2);

    const onChange1= e => {
        setCount1(e.target.value);
        
    }
    const onChange2 = e => {
        setCount2(e.target.value);
        
    }
    const updateCart = () => {
        const amount=count1*price1+count2*price1;
        setTotal(amount);
    }
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
                            <h6><strong>{priceCurrency} <span class="text-muted">x</span></strong></h6>
                            </Col>
                            <Col xs="4">
                                <input type="text" class="form-control input-sm" value={count1} onChange={onChange1}/>
                            </Col>
                            <Col xs="2">
                                <Button size="xs"><FaTrashAlt/></Button>
                            </Col>
                            </Row>
                        </Col>
                        </Row>
                        
                    </CardBody>
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
                                        <h6><strong>{priceCurrency} <span class="text-muted">x</span></strong></h6>
                                    </Col>
                                    <Col xs="4">
                                        <input type="text" class="form-control input-sm" value={count2} onChange={onChange2}/>
                                    </Col>
                                    <Col xs="2">
                                        <Button size="xs"><FaTrashAlt/></Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        
                    </CardBody>
                    <CardBody>
                        <Row>
                            <Col xs="9" className="text-right">
                                Added Items?
                            </Col>
                            <Col xs="3">
                                <Button size="sm" outline color="secondary" block onClick={updateCart}>Update Cart</Button>
                            </Col>
                        </Row>
                    </CardBody>
                    <CardFooter>
                        <Row>
                            <Col xs="9">
                                <h4 class="text-right">Total <strong>{total}</strong></h4>
                            </Col>
                            <Col>
                            <Link to={{
  pathname: '/checkout',
  state: {
    total: total
  }
}}><Button size="sm" color="primary" block>Checkout</Button></Link>
                                
                            </Col>
                        </Row>
                    </CardFooter>
                </Card>
            </Container>
        
    )
}

export default Cart;
