import { useState } from "react";
import "./App.css";

//Alt + ↑ or Alt + ↓ shortcut To move a line or a block of code up or down

// Shortcut :
// //To manually indent or outdent selected lines or the current line, use the following keyboard shortcuts:

// // Indent: Ctrl + ]
// // Outdent : Ctrl + [


// first render in useEffect:
// first rendering thing is common in all 3 scenario 

// useEffect(() => {
//   //Runs on every render
// });

// useEffect(() => {
//   //Runs only on the first render
// }, []);

// useEffect(() => {
//   //Runs on the first render
//   //And any time any dependency value changes
// }, [prop, state]);

//so in simple words:

// If no dependency array → run every render
// If [] → run once
// If [values] → run when any value changes

function App() {

const [counter , setCounter] = useState(0)

  // let counter = 3;

 const addValue = () => {
  setCounter((counter) => (counter < 20 ? counter + 1 : 20))// in this condition we are checking if the counter is < 20 then increase the counter value till 19 only, if the counter value is 20 then it will not increase the counter value and it will remain 20 only

  // setCounter(counter + 1)// same method but in more simpler way
  console.log("value added" , counter);
  
 }
const removeValue = () => {
  setCounter((counter) =>(counter > 0 ?  counter - 1 : 0))// in this condition we are checking if the counter is > 0 then decrease the counter value till 1 only, if the counter value is 0 then it will not decrease the counter value and it will remain 0 only
  console.log("value removed" , counter);
  
 }
 
  return (
    <>
      <h1>Counter project</h1>
      <h2>counter Value {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
