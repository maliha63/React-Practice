

//In React, components are the building blocks of any application. They allow developers to break down complex user interfaces into smaller, reusable pieces.

//Import and Export:

// Importing and exporting components refer to sharing and using components across different files in your application.

// Exporting a component means making it available for use in other files. Importing a component means bringing it into another file to use it.

// Types of Exports in React
// In React, there are two types of exports

//1. Default Exports and Imports
//2. Named Exports and Imports


// 1. Default Export and Import
// A default export allows you to export a single component or variable from a file. When importing a default export, you can give it any name you choose.

// 2. Named Export and Import
// Named exports allow you to export multiple components or variables from a single file. When importing a named export, you must use the exact name of the exported entity.

// 3. Combining Default and Named Exports
// You can also use both named and default exports in a single file. This is useful when you want to export a primary component (default export) and several utility components or functions (named exports).

//{} - means enter javascript
//{""} - used for spacing

//wiring - when you store your input value or anything inside your state or variable

//must use return keyword if you use curly braces {} or you can use parenthesis () which is called auto return.






//Custom Hooks:

//Custom Hooks are a powerful feature in React that allow you to create reusable logic for managing state and side effects in your components. A custom Hook is a JavaScript function that starts with the word "use" and can call other Hooks (like useState, useEffect, etc.) to encapsulate and share logic across multiple components. Custom Hooks enable you to abstract away complex logic, making your components cleaner and more focused on their primary responsibilities. By using custom Hooks, you can easily reuse functionality such as form handling, data fetching, or any other stateful logic without duplicating code across your application.

//so it makes our code clean, maintainable,readable and reusable.


//Higher-Order Component (HOC):

//A Higher-Order Component (HOC) is an advanced technique in React for reusing component logic. Concretely, it is a function that takes a component as an argument and returns a new, "enhanced" component with additional props, state, or behavior, without modifying the original component directly. HOCs are often used for cross-cutting concerns like authentication, logging, or data fetching, allowing developers to abstract away common functionality and keep components focused on their primary responsibilities. By wrapping a component with an HOC, you can inject additional logic or data into the component, making it more flexible and reusable across different parts of your application.

//While HOCs are a valid pattern, the official React documentation notes that they are not commonly used in modern React code, as custom Hooks can often achieve similar results with less complexity

//Hydration:

//Hydration in React is the process where React runs on the client-side, traverses the pre-rendered HTML (from SSR or SSG), and attaches event listeners to make the static page interactive. It "hydrates" the static HTML by binding event handlers and initializing state without fully re-rendering the DOM.

//server-side component:

//whatever components we have inside app directory is considered  as server-side component in next js and we can't add interactivity in server-side component like adding/attaching event listeners or hooks ,if we did it will throw error by saying us to convert it from server-side component into client side component .to convert it use just have to add "use client" text on top level of the component like we add in js for strict mode.

//If any of your component is server-side component then react will not ship it's js on the frontend because it's rendering will happen on the backend/server and the data(html/css) we got from backend will be streamed on the frontend.because of this our js bundle size will be decreased and our application's  interactivity and speed will be increased.overall it prevents the unnecessary loading of js.That's why initial page load is fast in server-side rendering.


















