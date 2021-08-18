import React from 'react'
import { Route } from 'react-router-dom'
import HomePage from './HomePage'
import CartPage from './CartPage'
import PurchaseHistoryPage from './PurchaseHistory'
import ProfilePage from './ProfilePage'
import AboutPage from './AboutPage'
import AuthPage from './Auth'
import ReviewPage from './ReviewPage'

const MyRoutes: React.FC = () => {
  return (
    <>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/auth' component={AuthPage} />
      <Route exact path='/cart' component={CartPage} />
      <Route exact path='/about' component={AboutPage} />
      <Route exact path='/review' component={ReviewPage} />
      <Route exact path='/profile' component={ProfilePage} />
      <Route exact path='/purchasehistory' component={PurchaseHistoryPage} />
    </>
  )
}

export default MyRoutes
