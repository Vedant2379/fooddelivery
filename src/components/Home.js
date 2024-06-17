// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { Button, Card, Col, Container, Row } from 'react-bootstrap'
// import { useDispatch, useSelector } from 'react-redux'
// import { addItem } from '../reduxwork/CartSlice'
// import './Home.css'


// function Home() {
//   const [foodData, setfoodData] = useState([])
//   const dispatcher = useDispatch();

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/allfood')
//       .then((result) => {
//         setfoodData(result.data)
//       }).catch((err) => {
//         console.log(err)
//       })
//   }, [])

  
//   return (
//     <div className='food-display' id='food-display'>
//       <Container className='food-display-list'>
//         <Row>
//           {
//             foodData.map((food) => {
//               return (
//                 <Col lg={3} sm={12} md={6}>
//                   <Card>
//                     <Card.Img className='food-image' src={`http://localhost:5000${food.FoodImage}`} />
//                     <Card.Body>
//                       <h5>{food.FoodName}</h5>
//                       <h5>{food.FoodType}</h5>
//                       <h5>{food.FoodCategory}</h5>
//                       <h5>{food.FoodPrice}</h5>
//                     </Card.Body>
//                     <Card.Footer>
//                       <Button onClick={() => { dispatcher(addItem(food)) }}>Add To Cart</Button>
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

// export default Home
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addItem } from '../reduxwork/CartSlice'
import './Home.css'


function Home() {
  const [foodData, setfoodData] = useState([])
  const dispatcher = useDispatch();

  useEffect(() => {
    axios.get('http://localhost:5000/api/allfood')
      .then((result) => {
        setfoodData(result.data)
      }).catch((err) => {
        console.log(err)
      })
  }, [])

  
  return (
    <div className='food-display' id='food-display'>
      <Container className='food-display-list'>
        <Row>
          {
            foodData.map((food) => {
              return (
                <Col lg={3} sm={6} md={4} key={food._id}>
                  <Card className="food-card">
                    <Card.Img className='food-image' src={`http://localhost:5000${food.FoodImage}`} />
                    <Card.Body>
                      <h5 className="food-name">{food.FoodName}</h5>
                      <p className="food-info">{food.FoodType}</p>
                      <p className="food-info">{food.FoodCategory}</p>
                      <p className="food-price">Price: ${food.FoodPrice}</p>
                    </Card.Body>
                    <Card.Footer>
                      <Button onClick={() => { dispatcher(addItem(food)) }} className="add-to-cart-btn">Add To Cart</Button>
                    </Card.Footer>
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

export default Home