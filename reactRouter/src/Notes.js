
//React Router is the name of the core library, while react-router-dom is the specific npm package used for web applications.

//React Router is a JavaScript library specifically designed for React to handle client-side routing. , allowing users to navigate between different pages or sections without refreshing the entire page.

//It provides routing capabilities for React applications.
//Routing means handling navigation between different views.
//Without a router, your React application would be limited to a single page with no way to navigate between different views.

//React Router uses three main components for basic routing:

// Link: Creates navigation links that update the URL
// Routes: A container for all your route definitions
// Route: Defines a mapping/connection between a URL path and a component

//Types of React Routers:

//BrowserRouter     //HashRouter    //MemoryRouter

// BrowserRouter: Uses the HTML5 history API to keep your UI in sync with the URL.
// HashRouter: Uses the hash portion of the URL (i.e., window.location.hash) to keep your UI in sync with the URL.

// Style Active Links:

// NavLink: Similar to Link but provides additional styling attributes when the link is active.

// There is a special version of the Link component called NavLink that knows whether the link's URL is "active" or not.

// The NavLink is especially useful for:

// Navigation menus
// Breadcrumbs
// Tabs
// A NavLink is considered active if the current URL matches its to prop.

// The NavLink component makes it easier to style active links.
