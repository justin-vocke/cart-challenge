import React from 'react';
import {
    Card, CardHeader, CardFooter, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container, Row, Col, Form, FormGroup, Label, Input, Badge
  } from 'reactstrap';

  import {FaLock} from 'react-icons/fa';
  import {IoLogoUsd} from 'react-icons/io';
  import './checkout.css';

const Checkout = (props) => {
    const {total} = props.location.state;
    return (
        <Container>
            <Row>
                <Col xs="12" sm={{size:4, offset:4}}>
                    <Card xs="6" >
                        <CardHeader >
                            <Row>
                                <Col xs="12" sm="7">
                                    <CardTitle  tag="h5">Payment Details</CardTitle>
                                </Col>
                                <Col xs="12" sm={{size:4, offset:1}}>
                                    <Label>
                                        <Input type="checkbox" />
                                        Remember
                                    </Label>
                                </Col>
                            </Row>
                        </CardHeader>
                        <CardBody>
                            <Form>
                                <FormGroup>
                                    <Label style={{fontWeight:"bold"}} for="cardNumber"> CARD NUMBER</Label>
                                    <div className="input-group">
                                        <Input autoComplete="on"  type="text" id="cardNumber" placeholder="Valid Card Number"
                                        required autofocus/>
                                        <span className="input-group-addon">
                                            <FaLock/>
                                        </span>
                                    </div>
                                </FormGroup>
                                <Row>
                                    <Col xs="7">
                                        <FormGroup>
                                            <Label style={{fontWeight:"bold"}} for="expiryMonth">EXPIRY DATE</Label>
                                            <Row style={{marginLeft:"3px"}}>
                                            <Col xs="5"  className="pl-0">
                                                <Input  type="text" className="form-control" id="expityMonth" placeholder="MM" required/>
                                            </Col>
                                            <Col xs="5" className="pl-0">
                                                <Input type="text" className="form-control" id="expityYear" placeholder="YY" required />
                                            </Col>
                                            </Row>
                                            
                                        </FormGroup>
                                    </Col>
                                    <Col xs="5">
                                        <FormGroup>
                                            <Label style={{fontWeight:"bold"}} for="cvCode">CV CODE</Label>
                                            <Input type="password" class="form-control" id="cvCode" placeholder="CV" required/>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </Form>
                        </CardBody>
                        
                    </Card>
                   
                        <div id="payment-container">
                        <a id="payment" href="#"><Badge color="primary" className="float-right"><IoLogoUsd/>{total}</Badge>Final Payment</a>
                        </div>

                        <div id="payment-button">
                        <a id="payment-link" href="#">Pay</a>
                        </div>                  
                   
                </Col>
            </Row>
            
        </Container>
    )
}

export default Checkout;
