import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';
import img1 from '../images/aboutus.png'

function About() {
  return (
    <div className="about-us">
      <Container>
        <Row>
          <Col lg={6}>
            <h2 className="section-title">About Us</h2>
            <p className="about-description">
              At FoodDelight, we're passionate about delivering the best culinary experiences
              right to your doorstep. Our mission is to provide delicious and nutritious meals
              prepared with the freshest ingredients, sourced from local farmers and producers.
            </p>
            <p className="about-description">
              We believe in the power of food to bring people together, and we strive to make
              every meal a memorable and enjoyable experience for our customers.
            </p>
            <p className="about-description">
              Whether you're craving comforting classics or exploring adventurous flavors, FoodDelight
              is here to satisfy your appetite and elevate your dining experience.
            </p>
          </Col>
          <Col lg={6}>
            <img className="about-image" src={img1} alt="About Us" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About