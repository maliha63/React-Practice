import React, { useState } from "react";

//Interview Question:

function Counter() {
  const [counter, setCounter] = useState(10);

  const addValue = () => {
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)

    // this method is not recommended because it can lead to stale state value problem.you are just repeating the same thing 3 times. the output will be same as if you just do setCounter(counter + 1) once, so the final counter value will be 11 instead of 13.
    
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);

    //so in this case we are using the previous state value to update the counter value, so that we can avoid the problem of stale state value, and we can get the correct counter value after each update. because in react state updates are asynchronous, so if we use the current state value to update the counter value, then we will get the stale state value and we will not get the correct counter value after each update. but if we use the previous state value to update the counter value, then we will get the correct counter value after each update.

    //the output would be 14 because of batching of state updates in react, so all the state updates will be batched together and the final state value will be updated after all the state updates are processed, so in this case the final state value will be 14 because we are adding 1 to the counter value 4 times, so the final counter value will be 10 + 1 + 1 + 1 + 1 = 14.
  };

  const removeValue = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
    </div>
  );
}

export default Counter;
