import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Counter from './Counter.jsx'
import ConterValue from './Counter2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <ConterValue />
   {/* <Counter /> */}
   {/* <App /> */}
  </StrictMode>,
)
