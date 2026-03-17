import React, { useState } from "react";
import calculateExpression from "./calculate";
import "./style.css";

function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleEqual = () => {
    try {
      const result = calculateExpression(input);
      setInput(String(result));
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">

      <input
        className="display"
        value={input}
        readOnly
      />

      <div className="buttons">

        {["7","8","9","/"].map(btn =>
          <button key={btn} onClick={()=>handleClick(btn)}>{btn}</button>
        )}

        {["4","5","6","*"].map(btn =>
          <button key={btn} onClick={()=>handleClick(btn)}>{btn}</button>
        )}

        {["1","2","3","-"].map(btn =>
          <button key={btn} onClick={()=>handleClick(btn)}>{btn}</button>
        )}

        <button onClick={()=>handleClick("0")}>0</button>
        <button onClick={handleClear}>C</button>
        <button onClick={handleEqual}>=</button>
        <button onClick={()=>handleClick("+")}>+</button>

      </div>

    </div>
  );
}

export default Calculator;