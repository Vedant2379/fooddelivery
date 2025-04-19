import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './MyProfile.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './MyFormLogin.css'
import axios from 'axios';
import { login } from './reduxwork/UserSlice'

function MyProfile() {

    // const [customerId, setId] = useState("");
    const [customerPassword, setPassword] = useState("");
    const { UserData } = useSelector((state) => state.user)
    const navi = useNavigate()
    const dispatcher = useDispatch()


    const updateCustomer = () => {
        const log = {
            custid: UserData._id,
            CustomerPassword: customerPassword
        }

        const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
        // axios.post("http://localhost:5000/api/updatecustomer", log)
        axios.post(`${API_BASE_URL}/api/updatecustomer`, log)
            .then((result) => {
                if (result.data.success) {
                    // alert("Login Successful")
                    dispatcher(login(result.data.data))
                    console.log(result.data)
                } else {
                    alert("Incorrect customer id")
                }
                

            })
            .catch((err) => {
                console.log(err)
            })

    }

  return (
    <div className="profile-page">
      <Container>
        <Row>
          <Col lg={6}>
            <h2 className="section-title">My Profile</h2>
            <Form className="profile-form">
              {/* <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Form.Group controlId="formAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Enter your address" />
              </Form.Group> */}
              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
              </Form.Group>
              <button className='submit-btn' onClick={() => updateCustomer()}>Update Profile</button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default MyProfile