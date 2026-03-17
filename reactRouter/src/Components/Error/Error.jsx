import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
//Splats:

// In routing, a "splat route" (also known as a "catchall" or "star" segment) is a wildcard that matches any URL path segments following a specific pattern. 
 
// Purpose: Splat routes are primarily used for handling 404 "Page Not Found" errors or for creating a single route that can process a wide variety of dynamic subpaths, which is useful in content management systems or complex navigation structures.
// Syntax: A splat route path pattern ends with /*.

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      
      <h1 className="text-8xl font-extrabold text-red-500">404</h1>
      
      <h2 className="mt-4 text-2xl font-semibold text-gray-800">
        Page Not Found
      </h2>
      
      <p className="mt-2 text-gray-500 text-center max-w-md">
        The page you’re looking for doesn’t exist or may have been moved.
      </p>

      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md 
                   hover:bg-blue-700 transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
}