import axios from 'axios';
import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { register } from './reduxwork/UserSlice';
import { useDispatch } from 'react-redux';


function MyFormCustomer() {
    const dispatcher = useDispatch();

    const [customerName, setName] = useState("");
    const [customerEmail, setEmail] = useState("");
    const [customerPassword, setPassword] = useState("");
    const [customerAddress, setAddress] = useState("");
    const [customerMob, setMob] = useState("0");

    function addCustomer() {
        const customer = {
            customerName: customerName,
            CustomerEmail: customerEmail,
            CustomerPassword: customerPassword,
            CustomerAddress: customerAddress,
            CustomerMob: Number(customerMob)
        }
        axios.post("http://localhost:5000/api/addcustomer", customer)
            .then((result) => {
                alert("customer Added")
                console.log(result.data)
                dispatcher(register(result.data))
            })
            .catch((err) => {
                console.log(err)
            })
    }


    return (
        <div>
            <Container>
                <Row>
                    <Form>
                        <Form.Group>
                            <Form.Label>Customer Name</Form.Label>
                            <Form.Control type='Text' placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Customer Email</Form.Label>
                            <Form.Control type='Email' placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Customer Password</Form.Label>
                            <Form.Control type='Password' placeholder='Enter password' onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Customer Address</Form.Label>
                            <Form.Control type='Text' placeholder='Enter your address' onChange={(e) => setAddress(e.target.value)} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Mob No</Form.Label>
                            <Form.Control type='Number' placeholder='Enter Mob no' onChange={(e) => setMob(e.target.value)} />
                        </Form.Group>
                    </Form>
                    <Button onClick={() => addCustomer()}>Submit</Button>
                </Row>
                <Row>
                    <Col><h4>{customerName}</h4></Col>
                    <Col><h4>{customerEmail}</h4></Col>
                    <Col><h4>{customerPassword}</h4></Col>
                    <Col><h4>{customerAddress}</h4></Col>
                    <Col><h4>{customerMob}</h4></Col>
                </Row>
            </Container>
        </div>
    )
}

export default MyFormCustomer