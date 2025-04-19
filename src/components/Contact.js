import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Contact.css';
import img1 from '../images/contactus.jpg'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Contact() {

    const dispatcher = useDispatch();
    const navi=useNavigate();

    const [senderName, setName] = useState("");
    const [senderEmail, setEmail] = useState("");
    const [senderMessage, setMessage] = useState("");

    function sendMessage() {
        const message = {
            SenderName: senderName,
            SenderEmail: senderEmail,
            SenderMessage: senderMessage
        }
        // axios.post("http://localhost:5000/api/sendmessage", message)
        const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
        axios.post(`${API_BASE_URL}/api/sendmessage`,message)
            .then((result) => {
                alert("Message sent")
                console.log(result.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

  return (
    <div className="contact-page">
      <Container>
        <Row>
          <Col lg={6}>
            <h2 className="section-title">Contact Us</h2>
            <p className="contact-description">
              Have a question or feedback? We'd love to hear from you! Please fill out the form
              below and we'll get back to you as soon as possible.
            </p>
            <Form className="contact-form">
              <Form.Group controlId="formName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Your Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
              </Form.Group> 
              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Enter your message" onChange={(e) => setMessage(e.target.value)} />
              </Form.Group>
              <button className='submit-btn' type="submit" onClick={() => sendMessage()}>Submit</button>
            </Form>
          </Col>
          <Col lg={6}>
            <img className="contact-image" src={img1} alt="Contact Us" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Contact