//Redux is a core library and React-redux is an implementation of redux for react applications.for wiring react applications with redux we need to install react-redux package and for writing redux logic we need to install redux toolkit package. React-redux provides bindings for React to work with Redux, while Redux Toolkit provides a set of tools and utilities to simplify the process of writing Redux logic.

//React redux is depricated / no longer in use.internally redux toolkit is used.
//Redux is an independent state management library.the reason why it is called independent is because it works fine with not only React but also with vue or any other js library/framework that's why it called "A predictable state container for js Apps"

//Reducer is the one who is responsible for handling the event and it return a new state.

//state is not directly updated in redux store instead it is updated by the reducer function. Reducer is a pure function that takes the current state and an action as arguments and returns a new state based on the action type and payload. The reducer function is responsible for handling the logic of how the state should be updated in response to different actions dispatched to the store.

//Architectural pattern of Redux with diagramatic representation:
//UI layer (Button) => onClick => Handler Function (Event Dispatch)[Along with the curent state of the value] => Redux Store => Dispatch Action  => Reducer  => Updates the State of the store => Redux Store (Accepts / store the value) => [whatever component that was dependent/Relied/subscribed/listens/reads on our Redux store that will be automatically re-rendered] Updates the UI

//Architectural pattern of Redux:
//first, button is clicked => onClick event is triggered => Handler function is called => Handler function dispatches an action to the Redux store along with the current state of the value => Redux store receives the action and passes it to the reducer function => Reducer function processes the action and updates the state of the store accordingly => Redux store accepts and stores the new value => Any component that is subscribed to the Redux store will automatically re-render and update the UI based on the new state.

//whatever value we'll recieve from the reducer function will be stored in the redux store and then whatever component that was dependent/Relied/subscribed/listens/reads on our Redux store that will be automatically re-rendered and updates the UI

// Purpose of creating Redux Toolkit:
// The Redux Toolkit package is intended to be the standard way to write Redux logic. It was originally created to help address three common concerns about Redux:

// "Configuring a Redux store is too complicated"
// "I have to add a lot of packages to get Redux to do anything useful"
// "Redux requires too much boilerplate code"

// Flux:

// Flux is an architectural pattern, created by Facebook, for building client-side web applications with a unidirectional (single directional) data flow. It is not a framework or library in the traditional sense, but rather a design principle to manage application state in a predictable and scalable way, which complements React's view components.

//Zustand:

//Zustand is a small, fast, and scalable state management library for React applications. It provides a simple and intuitive API for managing state in a predictable way, without the need for complex boilerplate code. Zustand allows you to create a global store that can be accessed and updated from any component in your application, making it easy to manage state across different parts of your app. It also supports features like middleware, persistence, and server-side rendering, making it a versatile choice for state management in React applications.

// single source of truth" (SSOT):

//Every Application has only one store which is called "single source of truth" (SSOT) and it is the only place where the state of the application is stored. This means that all components in the application read from this single store, and any changes to the state are made through actions that are dispatched to the store, which then updates the state through reducers. This unidirectional data flow helps to maintain consistency and predictability in the application's state management.

// In React, the "single source of truth" (SSOT) is a principle stating that for any single piece of mutable data in an application, there should be one designated, authoritative location where that information is stored. All components needing that data should access it from this central location, ensuring consistency and preventing data duplication and conflicts. 

// This principle is typically implemented in several ways, depending on the application's complexity: 

// 1.Component State and Prop Drilling: The most basic method involves storing state in a common ancestor/parent component and passing it down to children via props. This is known as "lifting state up".
// 2.React Context API: For data that many nested components need (e.g., theme settings or language preferences), the built-in Context API allows sharing state without passing props through every level of the component tree.

// Purpose:The goal of SSOT is to make an application's data flow predictable and debugging simpler, as you always know where to look to find or update a specific piece of information.

//useDispatch:

//useDispatch is hook which is used to dispatch an action to the redux store. It is used to trigger a state change in the store by sending an action object that describes the type of change and any necessary payload data. The useDispatch hook provides a way for components to interact with the Redux store and update the state based on user interactions or other events.

//useSelector:

//useSelector is a hook that allows you to Retrieve/extract data from the Redux store state. It takes a selector function as an argument, which is used to select a specific piece of state from the store. The useSelector hook will automatically subscribe to the Redux store and re-render the component whenever the selected state changes. This makes it easy to access and use the state in your React components without having to manually subscribe and manage updates.

//Slice:

//Every feature of your app has its own slice. A slice is a collection of reducer logic and actions for a single feature of your app, typically defined in a single file. It is a way to organize your Redux logic by feature or domain, making it easier to manage and maintain. A slice typically includes the initial state, reducer functions to handle actions, and action creators to dispatch those actions. By using slices, you can keep your Redux code modular and focused on specific areas of your application, improving readability and maintainability.

//In simple words, Every feature of application is called slice. For example, if you have a todo app, you can have a slice for todos, another slice for user authentication, and so on. Each slice will contain the state and logic related to that specific feature of the application.
