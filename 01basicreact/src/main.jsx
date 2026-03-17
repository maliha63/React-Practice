import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Keypress from './keypress.jsx'
// import {Hi , Hello} from './greeting.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Keypress /> */}
  </StrictMode>,
)
