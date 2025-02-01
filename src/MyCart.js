import axios from 'axios'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { calculateTotal, clearCart, decreQty, increQty } from '../src/reduxwork/CartSlice'
import React, { useEffect, useState } from 'react'
import './MyCart.css'

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

function MyCart() {

  const { UserData } = useSelector((state) => state.user)
  const { CartItems, CartTotalAmt } = useSelector((state) => state.cart)
  const dispatcher = useDispatch()

  console.log("DATA", UserData)
  dispatcher(calculateTotal())

  async function showRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    // const data = await fetch("http://localhost:5000/razorpay", {
    //   method: "POST",
    // }).then((t) => t.json());

    const { data } = await axios.post("http://localhost:5000/razorpay", { amt: CartTotalAmt })

    console.log(data);

    const options = {
      key: "rzp_test_9th3ukiKK1ibNm",
      currency: data.currency,
      amount: data?.amount?.toString(),
      order_id: data.id,
      name: "order food",
      description: "Thank you",
      // image: "http://localhost:1337/logo.svg",
      handler: function (response) {
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);

        alert("Transaction successful");
      },
      prefill: {
        name: "Rajat",
        email: "rajat@gmail.com",
        phone_number: "9999999999",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

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
        showRazorpay()
        dispatcher(clearCart())
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className="cart-container">
      <Row>
        {CartItems.map((food) => (
          <Col lg={3} sm={12} md={6} key={food._id}>
            <Card className="food-card">
              <Card.Img className='food-image' src={`http://localhost:5000${food.FoodImage}`} />
              <Card.Body>
                <p className="food-name">Food: {food.FoodName}</p>
                <p className="food-price">Price: {food.FoodPrice}</p>
              </Card.Body>
              <Card.Footer className="food-footer">
                <Button onClick={() => { dispatcher(increQty({ iid: food._id })) }}>+</Button>
                <span>{food.qty}</span>
                <Button onClick={() => { dispatcher(decreQty({ iid: food._id })) }}>-</Button>
              </Card.Footer>
            </Card> 
          </Col>
        ))}
      </Row>
      <Row className="cart-total">
        <Col><h3>Total: ${CartTotalAmt}</h3></Col>
        <Col><Button onClick={() => addOrder()}>Place Order</Button></Col>
      </Row>
      <h1>{UserData.CustomerName}</h1>
    </div>
  )
}

export default MyCart