//useref Hook:

// It can be used to store a mutable value that does not cause a re-render when updated.
// useRef() only returns one item. It returns an Object called current.
// The useRef Hook can also be used to keep track of previous state values.
// This is because useRef Hook allows you to persist values between renders.

// The useRef Hook is often used to access DOM elements directly for reference.

  //Usage:
  // First, we create a ref using the useRef Hook: const inputElement = useRef();.
  // Then, we attach the ref to a DOM element using the ref attribute in JSX: <input type="text" ref={inputElement} />.
  // Finally, we can access the DOM element using the current property: inputElement.current.

                               // or

// The useRef Hook lets you store a mutable value that persists across component renders. It is commonly used to access DOM elements or keep values without causing re-renders.

// Returns an object with a .current property to hold any value
// Updating .current does not trigger a re-render
// Useful for DOM access, timers, and storing previous values