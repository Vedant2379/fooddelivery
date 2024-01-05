import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

function MyOrdersHistory() {
  const [orderData, setorderData] = useState([])

  useEffect(() => {
    let data = {
      cid: "658aa00acf46a039acd2a6d1"
    }
    axios.post('http://localhost:5000/api/getorderbyCustid', data)
      .then((result) => {
        setorderData(result.data)
      }).catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      <Container>
        <Row>
          {
            orderData.map((order) => {
              return (
                <Col lg={3} sm={12} md={6}>
                  <Card>
                    <Card.Body>
                      <h5>{order.OrderDate}</h5>
                      <h5>{order.OrderStatus}</h5>
                      <h5>{order.NoOfItems}</h5>
                      <h5>{order.TotalAmt}</h5>
                    </Card.Body>
                  </Card>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </div>
  )
}

export default MyOrdersHistory