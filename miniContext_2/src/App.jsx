import React from 'react'
import './App.css'
import Items from './Components/Items'
import Cart from './Components/Cart'

const App = () => {
  return (
    <div>
      <Items  name="MacBook Pro" price="1,00000"/>
      <Items  name="Phone Case" price="400"/>
      <Items  name="Mobile " price="35000"/>
      <Cart/>
    </div>
  )
}

export default App
