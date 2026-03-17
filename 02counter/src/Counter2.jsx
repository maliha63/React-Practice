import { useState } from "react";


export default function App() {
  const [value, setValue] = useState(1);
  // const [multipliedValue, setMultipliedValue] = useState(1);
  //here it wasn't necessary to use another useState for multiplication . when a simple js variable can do the same thing .so what's the use useState here.
  //useState keeps track of our application's state ,meaning it keeps track of the previous and current value.
  //And also the whole component remounts again when the ui updates in state .that's why i was able to multiple with current value not with initial value.
  let multipliedValue = value * 5;

  const handleMultiplication = () => {
    // setMultipliedValue(value * 5);
    setValue(value + 1);
  };

  return (
    <div className="App">
      <h1>Main Value:{value}</h1>
      <button onClick={handleMultiplication}>Click me to multiply by 5</button>
      <h2>Multiplied Value:{multipliedValue}</h2>
    </div>
  );
}
