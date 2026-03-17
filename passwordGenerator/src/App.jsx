import React, { useState, useCallback, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [password, setPassword] = useState("");

  
  const passwordRef = useRef(null); // i don't have a default value so set it as null .useRef Hook is used for accessing the DOM Elements directly for reference.

  
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (includeNumbers) {
      str += "0123456789";
    }
    if (includeSymbols) {
      str += "!@#$%^&*()_+[]{}|;:,.<>?/~`-=";
    }

    for (let i = 0; i < length; i++) {
      //here don't give 1 as i value , because it  can make your password shorter than expected. for eg .your range is 8 and it only gave you 7 because You are starting from 1
      // You are using < length
      // If length = 8, this runs 7 times, not 8.so give i value 0.

      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char); //here you have to use += not just = , because if you use  = then it will only generate single value/character by overwriting it but we want to append the value so we use +=.
    }
    setPassword(pass);
  }, [length, includeNumbers, includeSymbols, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100); //it's an optimized method for setting range .Not necessaryly needed but it's good for optimization.if i want i can also pass (0, 10) and then it will select only 10 values.
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
      <h1 className="text-center font-bold text-3xl text-white pt-8">
        Password Generator
      </h1>
      <div className="w-full max-w-md mx-auto mt-10 p-4 bg-gray-500 rounded-lg shadow-md">
        <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-white">
          <input
            type="text"
            ref={passwordRef}
            value={password} //the value we type in input box wil be stored in password variable
            placeholder="Password"
            readOnly //this will make the input box read only, so we can't type in it
            className="w-full px-4 py-2 text-gray-700 focus:outline-none"
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-950 text-white px-3 py-0.5 shrink-0 cursor-pointer font-bold hover:bg-blue-900 "
          >
            Copy
          </button>
        </div>

        <button
          onClick={passwordGenerator}
          className="block mx-auto w-40 bg-blue-950 text-white py-2 rounded-md font-semibold hover:bg-blue-900 transition mb-3.5  "
        >
          Generate Password
        </button>

        <div className="flex gap-x-2 text-sm text-blue-950 font-medium">
          <div className="flex items-center gap-x-2">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(Number(e.target.value)); //since e.target.value is string and our length is a number .here i converted it from string into number.
              }}
              //{""}to Insert one space character.
            />
            <label htmlFor="Length" className="mr-3">
              {" "}
              Length : {length}
            </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={includeNumbers}
              className="cursor-pointer"
              id="numberInput"
              onChange={() => setIncludeNumbers((prev) => !prev)} //this will toggle the includeNumbers state variable , meaning if it's true it will become false and if it's false it will become true
            />
            <label htmlFor="numberInput" className="mr-3">
              {" "}
              Numbers
            </label>
          </div>
          <div className="flex items-center gap-x-1 ">
            <input
              type="checkbox"
              defaultChecked={includeSymbols}
              className="cursor-pointer"
              id="symbolInput"
              onChange={() => setIncludeSymbols((prev) => !prev)} //this will toggle the includeSymbols state variable.
            />
            <label htmlFor="symbolInput"> Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
