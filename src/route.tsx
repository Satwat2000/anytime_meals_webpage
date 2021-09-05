import React from 'react'
import { Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import CartPage from './components/CartPage'
import PurchaseHistoryPage from './components/PurchaseHistory'
import ProfilePage from './components/ProfilePage'
import AboutPage from './components/AboutPage'
// import AuthPage from './components/Auth'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import ReviewPage from './components/ReviewPage'

const MyRoutes: React.FC = () => {
  return (
    <>
      <Route exact path='/' component={SignIn} />
      <Route exact path='/register' component={SignUp} />
      <Route exact path='/home' component={HomePage} />
      {/* <Route exact path='/auth' component={AuthPage} /> */}
      <Route exact path='/cart' component={CartPage} />
      <Route exact path='/about' component={AboutPage} />
      <Route exact path='/review' component={ReviewPage} />
      <Route exact path='/profile' component={ProfilePage} />
      <Route exact path='/purchasehistory' component={PurchaseHistoryPage} />
    </>
  )
}

export default MyRoutes
