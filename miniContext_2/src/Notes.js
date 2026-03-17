// React Context:
// React Context is a way to manage state globally.

// It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.

// The Problem
// State should be held by the highest parent component in the stack that requires access to the state.

// To illustrate, we have many nested components. The component at the top and bottom of the stack need access to the state.

// To do this without Context, we will need to pass the state as "props" through each nested component. This is called "prop drilling".

//Prop Drilling:

//Prop drilling is a term used in React to describe the process of passing data from a parent component down to its child components through props, especially when the data needs to be passed through multiple levels of the component tree. This can lead to a situation where intermediate components that do not need the data are forced to pass it down, which can make the code more complex and harder to maintain.

//In simple words: Passing the data (props) through multiple layers of components, from a parent component to a deeply nested child component.

//Context API:

//The Context API is a feature in React that allows you to share data across the component tree without having to pass props down manually at every level. It provides a way to create global variables that can be accessed by any component in the application, making it easier to manage state and avoid prop drilling.

//useContext Hook:

//The useContext hook is a built-in React hook that allows you to access the value of a context directly in a functional component. It takes a context object (created by createContext) as an argument and returns the current value of that context. This makes it easier to consume context values without having to wrap components in a Consumer component or use the Context API's render props pattern.

// Usage:
// Create context using createContext().
// Wrap components with a Provider to pass the value.
// Call const value = useContext(MyContext) to consume data from the context in any component.