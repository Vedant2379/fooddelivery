// import axios from 'axios';
// import React, { useState } from 'react'
// import { Button, Col, Container, Form, Row } from 'react-bootstrap'

// function MyFormOrder() {

//     const [noOfItems, setNoOfItems] = useState("0");
//     const [totalAmt, setTotalAmt] = useState("0");

//     function addOrder() {
//         const order = {
//             NoOfItems: Number(noOfItems),
//             TotalAmt: Number(totalAmt)
//         }
//         axios.post("http://localhost:5000/api/addorder", order)
//             .then((result) => {
//                 alert("Order placed")
//                 console.log(result.data)
//             })
//             .catch((err) => {
//                 console.log(err)
//             })
//         }

//   return (
//     <div>
//         <Container>
//                 <Row>
//                     <Form>
//                         <Form.Group>
//                             <Form.Label>No of items</Form.Label>
//                             <Form.Control type='Number' placeholder="Enter no of items" onChange={(e) => setNoOfItems(e.target.value)} />
//                         </Form.Group>
//                         <Form.Group>
//                             <Form.Label>Total Amount</Form.Label>
//                             <Form.Control type='Number' placeholder="Enter total amount" onChange={(e) => setTotalAmt(e.target.value)} />
//                         </Form.Group>
//                     </Form>
//                     <Button onClick={() => addOrder()}>Submit</Button>
//                 </Row>
//                 <Row>
//                     <Col><h4>{noOfItems}</h4></Col>
//                     <Col><h4>{totalAmt}</h4></Col>
//                 </Row>
//             </Container>
//     </div>
//   )
// }

// export default MyFormOrder