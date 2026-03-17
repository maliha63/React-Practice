import React, { useState } from "react";
//ctl + space for auto suggestions and auto imports in vscode

function App() {
  const [color, setColor] = useState("purple");//when i refresh the page the bg changes back to purple color because here i have passed purple as an initial value inside useState.

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          <button onClick={ () => setColor ('red')} // onClick expects a function not the reference not the retured value of the function , so we need to wrap it in an arrow function (callback function) to make it work otherwise it will execute immediately when the component renders and not when the button is clicked . it's like we've just passed a hard coded value .

            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>

          <button onClick={ () => setColor ('green')}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>

          <button onClick={ () => setColor ('blue')}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>

          <button onClick={ () => setColor ('orange')}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>

          <button onClick={ () => setColor ('black')}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>

          <button onClick={ () => setColor ('gray')}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "gray" }}
          >
            Gray
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
