import React from 'react'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import MyRoutes from './route'

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <div>
        <MyRoutes />
      </div>
      <Footer />
    </>
  )
}

export default App
