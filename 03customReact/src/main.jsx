import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//so this is how react create element, works under the hood , if we want to create a element in react we can use the createElement method and pass the tag name , attributes and children as arguments and it will return a react element which we can render to the DOM using the createRoot method and render method of reactDOM.

const variable = '  by clickng this link'

const reactElement = React.createElement(
  'a',
  {href : 'https:google.com' , target : '_blank'},
  'visit google',
  variable // this is an evaluated expression
)

createRoot(document.getElementById('root')).render(
  
   reactElement
  
)
