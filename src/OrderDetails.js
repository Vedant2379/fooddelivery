// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { Card, Col, Container, Row } from 'react-bootstrap'
// import { useParams } from 'react-router-dom'

// const OrderDetails = () => {
//     const { orderid } = useParams()
//     const [orderDetails, setorderDetails] = useState({})

//     useEffect(() => {
//         const data = {
//             oid: orderid
//         }
//         axios.post('http://localhost:5000/api/getorderbyid', data)
//             .then((result) => {
//                 setorderDetails({ ...result.data })
//                 console.log("DATA", result.data)
//             }).catch((err) => {
//                 console.log(err)
//             })
//     }, [])


//     return (
//         <>
//             <h1>DETAILS</h1>
//             <h3>{orderDetails?.UserId?.CustomerMob}</h3>
//             <h3>{orderDetails?.UserId?.CustomerEmail}</h3>
//             <h2>Order Items</h2>
//             <div>
//                 <Container>
//                     <Row>
//                         {
//                             orderDetails?.OrderItems?.map((food) => {
//                                 return (
//                                     <Col>
//                                         <Card>
//                                             <Card.Img className='food-image' src={`http://localhost:5000${food.FoodId.FoodImage}`} />
//                                             <Card.Body>
//                                                 <h5>{food.FoodId.FoodName}</h5>
//                                                 <h5>{food.FoodId.FoodPrice}</h5>
//                                                 <h5>Quantity {food.Qty}</h5>
                                                
//                                             </Card.Body>
//                                         </Card>
//                                     </Col>
//                                 )
//                             })
//                         }
//                     </Row>
//                 </Container>

//             </div>
//         </>

//     )
// }

// export default OrderDetails
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import './OrderDetails.css';

const OrderDetails = () => {
    const { orderid } = useParams()
    const [orderDetails, setorderDetails] = useState({})

    useEffect(() => {
        const data = {
            oid: orderid
        }
        axios.post('http://localhost:5000/api/getorderbyid', data)
            .then((result) => {
                setorderDetails({ ...result.data })
                console.log("DATA", result.data)
            }).catch((err) => {
                console.log(err)
            })
    }, [])


    return (
        <div className="order-details-container">
            <h1 className="order-details-heading">Order Details</h1>
            <div className="customer-details">
                <h3>Customer Mobile: {orderDetails?.UserId?.CustomerMob}</h3>
                <h3>Customer Email: {orderDetails?.UserId?.CustomerEmail}</h3>
            </div>
            <h2 className="order-items-heading">Order Items</h2>
            <Container>
                <Row>
                    {
                        orderDetails?.OrderItems?.map((food, index) => {
                            return (
                                <Col key={index}>
                                    <Card className="food-card">
                                        <Card.Img className='food-image' src={`http://localhost:5000${food.FoodId.FoodImage}`} />
                                        <Card.Body>
                                            <h5>{food.FoodId.FoodName}</h5>
                                            <h5>Price: {food.FoodId.FoodPrice}</h5>
                                            <h5>Quantity: {food.Qty}</h5>
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

export default OrderDetails