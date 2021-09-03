import React from 'react'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import MyRoutes from './route'
import { store } from './redux/store'
import { Provider } from 'react-redux'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavBar />
      <div>
        <MyRoutes />
      </div>
      <Footer />
    </Provider>
  )
}

export default App
