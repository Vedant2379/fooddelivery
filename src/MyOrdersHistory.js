// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { Button, Card, Col, Container, Row } from 'react-bootstrap'
// import { useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
// import './MyOrdersHistory.css'

// function MyOrdersHistory() {
//   const [orderData, setorderData] = useState([])
//   const { UserData } = useSelector((state) => state.user)
//   const navi = useNavigate()


//   useEffect(() => {
//     let data = {
//       cid: UserData._id
//     }
//     axios.post('http://localhost:5000/api/getorderbyCustid', data)
//       .then((result) => {
//         setorderData(result.data)
//       }).catch((err) => {
//         console.log(err)
//       })
//   }, [])

//   return (
//     <div>
//       <Container>
//         <Row>
//           {
//             orderData.map((order) => {
//               return (
//                 <Col lg={3} sm={12} md={6}>
//                   <Card>
//                     <Card.Body>
//                       <h5>{order.OrderDate}</h5>
//                       <h5>{order.OrderStatus}</h5>
//                       <h5>{order.NoOfItems}</h5>
//                       <h5>{order.TotalAmt}</h5>
//                     </Card.Body>
//                     <Card.Footer>
//                       <Button onClick={() => navi(`/orderdetails/${order._id}`)}>Details</Button>
//                     </Card.Footer>
//                   </Card>
//                 </Col>
//               )
//             })
//           }
//         </Row>
//       </Container>
//     </div>
//   )
// }

// export default MyOrdersHistory
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './MyOrdersHistory.css'

function MyOrdersHistory() {
  const [orderData, setorderData] = useState([])
  const { UserData } = useSelector((state) => state.user)
  const navi = useNavigate() 

  useEffect(() => {
    let data = {
      cid: UserData._id
    }
    axios.post('http://localhost:5000/api/getorderbyCustid', data)
      .then((result) => {
        setorderData(result.data)
      }).catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div className="orders-container">
      <Container>
        <Row>
          {orderData.map((order) => (
            <Col lg={3} sm={12} md={6} key={order._id}>
              <Card className="order-card">
                <Card.Body>
                  <h5 className="order-date">Date: {order.OrderDate}</h5>
                  <p className="order-status">Status: {order.OrderStatus}</p>
                  <p className="order-items">Items: {order.NoOfItems}</p>
                  <p className="order-total">Total: ${order.TotalAmt}</p>
                </Card.Body>
                <Card.Footer>
                  <Button onClick={() => navi(`/orderdetails/${order._id}`)}>Details</Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default MyOrdersHistory