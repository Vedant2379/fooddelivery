import axios from 'axios';
import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from './reduxwork/UserSlice'


function MyFormLogin() {
    const [customerEmail, setEmail] = useState("");
    const [customerPassword, setPassword] = useState("");
    const navi = useNavigate()
    const dispatcher=useDispatch()

    const doLogin = () => {
        const log = {
            CustomerEmail: customerEmail,
            CustomerPassword: customerPassword
        }
        axios.post("http://localhost:5000/api/login", log)
            .then((result) => {
                if (result.data.success) {
                    alert("Login Successful")
                    dispatcher(login(result.data.data))
                    navi('/')
                    console.log(result.data)
                } else {
                    alert("Incorrect Email or Password")
                }
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
                            <Form.Label>Customer Email</Form.Label>
                            <Form.Control type='Email' placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Customer Password</Form.Label>
                            <Form.Control type='Password' placeholder='Enter password' onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>

                    </Form>
                    <Button onClick={() => doLogin()}>Submit</Button>
                </Row>
                <Row>
                    <Col><h4>{customerEmail}</h4></Col>
                    <Col><h4>{customerPassword}</h4></Col>

                </Row>
            </Container>
        </div>
    )
}

export default MyFormLogin