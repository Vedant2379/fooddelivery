import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Services from './components/Services'
import MyNavBar from './MyNavBar'
// import MyFormFood from './MyFormFood'
import MyFormCustomer from './MyFormCustomer'
// import MyFormOrder from './MyFormOrder'
import MyFormLogin from './MyFormLogin'
import MyOrdersHistory from './MyOrdersHistory'
import MyProfile from './MyProfile'
import MyCart from './MyCart'
import ProtectedRoute from './ProtectedRoute'
import { useSelector } from 'react-redux'
import OrderDetails from './OrderDetails'

function MyRoutes() {
  const { isLogedin } = useSelector((state) => state.user)

  return (
    <div>
        <Router>
            <MyNavBar/>=
            <Routes> 
                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/contact' element={<Contact/>} />
                <Route path='/services' element={<Services/>} />
                {/* <Route path='/addfoods' element={<MyFormFood/>} /> */}
                <Route path='/addcustomers' element={<MyFormCustomer/>} />
                {/* <Route path='/addorders' element={<MyFormOrder/>} /> */}
                <Route path='/logins' element={<MyFormLogin/>} />
                <Route path='/orderdetails/:orderid' element={<OrderDetails/>} />
                <Route path='/ordershistory' element={
                  <ProtectedRoute isSignin={isLogedin}>
                      <MyOrdersHistory/>
                  </ProtectedRoute>
                } />
                <Route path='/carts' element={
                  <ProtectedRoute isSignin={isLogedin}>
                      <MyCart/>
                  </ProtectedRoute>
                } />
                <Route path='/profiles' element={
                  <ProtectedRoute isSignin={isLogedin}>
                      <MyProfile/>
                  </ProtectedRoute>
                } />
            </Routes>
        </Router>
    </div>
  )
}

export default MyRoutes