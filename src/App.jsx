import React from 'react'
import { Home } from './pages/Home'
import { Navbar } from './components/Navbar'
import { About } from './pages/About'
import Products from './pages/Products'
import { Footer } from './components/Footer'

export const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Products/>
      <About/>
      <Footer/>
    </div>
  )
}
