import axios from 'axios'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { calculateTotal, clearCart, decreQty, increQty } from '../src/reduxwork/CartSlice'
import React, { useEffect, useState } from 'react'


function MyCart() {

  const { UserData } = useSelector((state) => state.user)
  const { CartItems, CartTotalAmt } = useSelector((state) => state.cart)
  const dispatcher = useDispatch()

  dispatcher(calculateTotal())

  function addOrder() {
    let finalItems = []
    CartItems.map((item) => {
      finalItems.push({
        FoodId: item._id,
        Qty: item.qty
      })
    })

    const order = {
      NoOfItems: CartItems.length,
      TotalAmt: CartTotalAmt,
      OrderItems: finalItems,
      UserId: UserData._id
    }
    axios.post("http://localhost:5000/api/addorder", order)
      .then((result) => {
        alert("Order placed")
        console.log(result.data)
        dispatcher(clearCart())
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>
      <Row>
        {
          CartItems.map((food) => {
            const iid = food._id
            return (
              <Col lg={3} sm={12} md={6}>
                <Card>
                  <Card.Img className='food-image' src={`http://localhost:5000${food.FoodImage}`} />
                  <Card.Body>
                    <p>Food: {food.FoodName}</p>
                    <p>Price: {food.FoodPrice}</p>
                  </Card.Body>
                  <Card.Footer>
                    <Button onClick={() => { dispatcher(increQty({ iid })) }}>+</Button>
                    {food.qty}
                    <Button onClick={() => { dispatcher(decreQty({ iid })) }}>-</Button>
                  </Card.Footer>
                </Card>
              </Col>
            )
          })
        }
      </Row>
      <Row>
        <Col><h3>Total: {CartTotalAmt}</h3></Col>
        <Col><Button onClick={() => addOrder()}>Place Order</Button></Col>
      </Row>
      <h1>{UserData.CustomerName}</h1>

    </div>
  )
}

export default MyCart