// import React from 'react'
// import { Nav, Navbar } from 'react-bootstrap'
// import { Link } from 'react-router-dom'

// function MyNavBar() {
//   return (
//     <div>
//         <Navbar collapseOnSelect variant='dark' bg='dark' expand='lg'>
//                 <Navbar.Brand>my navbar</Navbar.Brand>
//                 <Navbar.Toggle aria-controls='responsive-navbar' />
//                 <Navbar.Collapse id='responsive-navbar'>
//                     <Nav className='me-auto'>
//                         <Nav.Link>
//                             <Link to="/">Home</Link>
//                         </Nav.Link>
//                         <Nav.Link>
//                             <Link to="/about">About</Link>
//                         </Nav.Link>
//                         <Nav.Link>
//                             <Link to="/contact">Contact Us</Link>
//                         </Nav.Link>
//                         <Nav.Link>
//                             <Link to="/services">Services</Link>
//                         </Nav.Link>
//                         {/* <Nav.Link>
//                             <Link to="/addfoods">Add Food</Link>
//                         </Nav.Link> */}
//                         {/* <Nav.Link>
//                             <Link to="/addorders">Place Order</Link>
//                         </Nav.Link> */}
//                         <Nav.Link>
//                             <Link to="/addcustomers">Sign Up</Link>
//                         </Nav.Link>
//                         <Nav.Link>
//                             <Link to="/logins">Log in</Link>
//                         </Nav.Link>
//                         <Nav.Link>
//                             <Link to="/carts">Cart</Link>
//                         </Nav.Link>
//                         <Nav.Link>
//                             <Link to="/ordershistory">Orders History</Link>
//                         </Nav.Link>
//                         <Nav.Link>
//                             <Link to="/profiles">My Profile</Link>
//                         </Nav.Link>
//                     </Nav>
//                 </Navbar.Collapse>
//             </Navbar>
//     </div>
//   )
// }

// export default MyNavBar
import React from 'react'
import { Button, Nav, Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import './MyNavBar.css';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './reduxwork/UserSlice';


function MyNavBar() {
  const { isLogedin } = useSelector((state) => state.user)
  const dispatcher = useDispatch()
  const navi = useNavigate()

  const handleLogout = () => {
    dispatcher(logout());
    navi('/logins')
  };

  return (
    <div className="navbar-container">
      <Navbar fixed='top' collapseOnSelect variant='dark' bg='dark' expand='lg'>
        <Navbar.Brand>FoodDelight</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar' />
        <Navbar.Collapse id='responsive-navbar'>
          <Nav className='me-auto'>
            <Nav.Link>
              <Link to="/" className="nav-link">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about" className="nav-link">About</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/contact" className="nav-link">Contact Us</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/services" className="nav-link">Services</Link>
            </Nav.Link>
            {isLogedin ? null :
              <Nav.Link>
                <Link to="/addcustomers" className="nav-link">Sign Up</Link>
              </Nav.Link>}
            {isLogedin ? null :
              <Nav.Link>
                <Link to="/logins" className="nav-link">Log in</Link>
              </Nav.Link>}
            {isLogedin ? <Nav.Link>
              <Link to="/carts" className="nav-link">Cart</Link>
            </Nav.Link> : null}
            {isLogedin ? <Nav.Link>
              <Link to="/ordershistory" className="nav-link">Orders History</Link>
            </Nav.Link> : null}
            {isLogedin ? <Nav.Link>
              <Link to="/profiles" className="nav-link">My Profile</Link>
            </Nav.Link> : null}
            {isLogedin ? <Button variant="primary" onClick={() => handleLogout() }>Log Out</Button>
              : null
            }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div >
  )
}

export default MyNavBar