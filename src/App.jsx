import { useState } from 'react'
import './App.css'
import Header from './Compunents/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Compunents/Home'
import ContactUs from './Compunents/ContactUs'
import Abouts from './Compunents/Abouts'
import SignIn from './Compunents/SignIn'
import SignUp from './Compunents/SignUp'
import ProductDetail from './Compunents/ProductDetail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/ContactUs' element={<ContactUs />} />
      <Route path='/Abouts' element={<Abouts />} />
      <Route path='/SignIn' element={<SignIn />} />
      <Route path='/SignUp' element={<SignUp />} />
      <Route path='/products/:id' element={<ProductDetail />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
