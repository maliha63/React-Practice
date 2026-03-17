import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import {store} from './app/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,//provider is a component from react-redux that allows us to pass the store to our React components. By wrapping our App component with the Provider and passing the store as a prop, we make the Redux store available to all components in our application, allowing them to access the state and dispatch actions as needed.
)