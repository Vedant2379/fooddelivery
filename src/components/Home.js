// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { Button, Card, Col, Container, Row } from 'react-bootstrap'
// import { useDispatch } from 'react-redux'
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
//                 <Col lg={3} sm={6} md={4} key={food._id}>
//                   <Card className="food-card">
//                     <Card.Img className='food-image' src={`http://localhost:5000${food.FoodImage}`} />
//                     <Card.Body>
//                       <h5 className="food-name">{food.FoodName}</h5>
//                       <p className="food-info">{food.FoodType}</p>
//                       <p className="food-info">{food.FoodCategory}</p>
//                       <p className="food-price">Price: ${food.FoodPrice}</p>
//                     </Card.Body>
//                     <Card.Footer>
//                       <Button onClick={() => { dispatcher(addItem(food)) }} className="add-to-cart-btn">Add To Cart</Button>
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
import { Button, Card, Col, Container, Row, Modal, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../reduxwork/CartSlice'
import './Home.css'

function Home() {
  const [foodData, setFoodData] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [review, setReview] = useState({ rating: 0, comment: '' })
  const [currentFood, setCurrentFood] = useState(null)
  const dispatcher = useDispatch();
  const { UserData } = useSelector((state) => state.user)

  useEffect(() => {
    axios.get('http://localhost:5000/api/topavgrating')
      .then((result) => {
        setFoodData(result.data.topReviews)
      }).catch((err) => {
        console.log(err)
      })
  }, [])

  const handleAddReview = (food) => {
    setCurrentFood(food)
    setShowModal(true)
  }

  const handleReviewSubmit = () => {
    if (currentFood) {
      let data = {
        CustomerId: UserData._id,
        FoodId: currentFood._id,
        Comment: review.comment,
        Rating: review.rating
      }
      axios.post('http://localhost:5000/api/createreview', data)
        .then(() => {
          setShowModal(false)
          setReview({ rating: 0, comment: '' }) // Reset review state
        }).catch((err) => {
          console.log(err)
        })
    }
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setReview({ rating: 0, comment: '' }) // Reset review state
  }

  // Separate food data into veg and non-veg arrays
  const vegFoodData = foodData.filter(food => food._id.FoodType.toLowerCase() === 'veg')
  const nonVegFoodData = foodData.filter(food => food._id.FoodType.toLowerCase() === 'non-veg')

  return (
    <div className='food-display' id='food-display'>
      <Container className='food-display-list'>
        <h2>Veg Food Items</h2>
        <Row>
          {
            vegFoodData.map((food) => {
              return (
                <Col lg={3} sm={6} md={4} key={food._id._id}>
                  <Card className="food-card">
                  <Card.Img className='food-image' src={`http://localhost:5000${food._id.FoodImage}`} />
                    <Card.Body>
                      <h5 className="food-name">{food._id.FoodName}</h5>
                      <p className="food-info">{food._id.FoodType}</p>
                      <p className="food-info">{food._id.FoodCategory}</p>
                      <p className="food-price">Price: ${food._id.FoodPrice}</p>
                      <p className="food-price">Rating: {food.averageRating.toFixed(2)}/10</p>
                    </Card.Body>
                    <Card.Footer>
                      <Button onClick={() => { dispatcher(addItem(food._id)) }} className="add-to-cart-btn">Add To Cart</Button>
                      <Button variant="secondary" onClick={() => handleAddReview(food._id)} className="add-review-btn">Add Review</Button>
                    </Card.Footer>
                  </Card>
                </Col>
              )
            })
          }
        </Row>

        <h2>Non-Veg Food Items</h2>
        <Row>
          {
            nonVegFoodData.map((food) => {
              return (
                <Col lg={3} sm={6} md={4} key={food._id._id}>
                  <Card className="food-card">
                    <Card.Img className='food-image' src={`http://localhost:5000${food._id.FoodImage}`} />
                    <Card.Body>
                      <h5 className="food-name">{food._id.FoodName}</h5>
                      <p className="food-info">{food._id.FoodType}</p>
                      <p className="food-info">{food._id.FoodCategory}</p>
                      <p className="food-price">Price: ${food._id.FoodPrice}</p>
                      <p className="food-price">Rating: {food.averageRating.toFixed(2)}/10</p>
                    </Card.Body>
                    <Card.Footer>
                      <Button onClick={() => { dispatcher(addItem(food._id)) }} className="add-to-cart-btn">Add To Cart</Button>
                      <Button variant="secondary" onClick={() => handleAddReview(food._id)} className="add-review-btn">Add Review</Button>
                    </Card.Footer>
                  </Card>
                </Col>
              )
            })
          }
        </Row>
      </Container>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="reviewRating">
              <Form.Label>Rating (1(very bad) -- 10(very good))</Form.Label>
              <Form.Control
                type='number'
                value={review.rating}
                onChange={(e) => setReview({ ...review, rating: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="reviewComment">
              <Form.Label>Review</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={review.comment}
                onChange={(e) => setReview({ ...review, comment: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleReviewSubmit}>
            Submit Review
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Home