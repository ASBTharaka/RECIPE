import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Place_Order from './pages/Place_Order/Place_Order'


const App = () => {
  return (
    <div className='app'>
       <Navbar/>
       <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='Cart' element={<Cart/>} />
          <Route path='Oreder' element={<Place_Order/>} />
       </Routes>
    </div>
  )
}

export default App