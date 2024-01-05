import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function MyNavBar() {
  return (
    <div>
        <Navbar collapseOnSelect variant='dark' bg='dark' expand='lg'>
                <Navbar.Brand>my navbar</Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar' />
                <Navbar.Collapse id='responsive-navbar'>
                    <Nav className='me-auto'>
                        <Nav.Link>
                            <Link to="/">Home</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/about">About</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/contact">Contact Us</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/services">Services</Link>
                        </Nav.Link>
                        {/* <Nav.Link>
                            <Link to="/addfoods">Add Food</Link>
                        </Nav.Link> */}
                        {/* <Nav.Link>
                            <Link to="/addorders">Place Order</Link>
                        </Nav.Link> */}
                        <Nav.Link>
                            <Link to="/addcustomers">Sign Up</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/logins">Log in</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/carts">Cart</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/ordershistory">Orders History</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/profiles">My Profile</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    </div>
  )
}

export default MyNavBar