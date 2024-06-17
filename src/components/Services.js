import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Services.css';
import img1 from '../images/varietycuisines1.jpg'
import img2 from '../images/fastdelivery2.jpeg'
import img3 from '../images/customizeorder.jpg'

function Services() {
  return (
    <div className="services-page">
      <Container>
        <h2 className="section-title">Our Services</h2>
        <Row>
          <Col lg={4} md={6}>
            <div className="service-item">
              <img className="service-icon" src={img1} alt="Service 1" />
              <h3 className="service-title">Variety of Cuisine</h3>
              <p className="service-description">
                Explore a diverse range of cuisines from around the world, including
                Italian, Mexican, Asian, and more.
              </p>
            </div>
          </Col>
          <Col lg={4} md={6}>
            <div className="service-item">
              <img className="service-icon" src={img2} alt="Service 2" />
              <h3 className="service-title">Fast Delivery</h3>
              <p className="service-description">
                Enjoy quick and efficient delivery service, ensuring your food arrives
                fresh and hot at your doorstep.
              </p>
            </div>
          </Col>
          <Col lg={4} md={6}>
            <div className="service-item">
              <img className="service-icon" src={img3} alt="Service 3" />
              <h3 className="service-title">Customizable Options</h3>
              <p className="service-description">
                Customize your orders according to your preferences, including
                dietary restrictions and special requests.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Services