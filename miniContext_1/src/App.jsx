import React from 'react'
import './App.css'
import Counter from './Components/Counter.jsx'
import { useContext } from 'react'
import { CounterContext } from './Contexts/Counter.jsx'

 function App() {
const counterState = useContext(CounterContext)
console.log("Context " , counterState);

  return (
    <div>
      <h1>Count is {counterState.count}</h1>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  )
}

export default App;