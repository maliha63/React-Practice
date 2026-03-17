// import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
const data = useLoaderData()

// useLoaderData:

// useLoaderData is a hook provided by React Router.
//  This hook helps to fetch the data for the component before it renders, this improves performance and prevents empty states.

//  We can implement the fetch data part inside the callback function. However, the problem with this approach is that it will run when the component is rendered. This makes it slow and may result in empty states ( component renders before data or state is fetched ).

// useLoaderData( ) hook is the solution for this problem.

// const data = useLoaderData( )
// This basically binds the loader function and state inside our component.

// When a request is made to that path, the route will invoke the loader function to fetch the data before the component renders, this will improve performance and prevent empty states.

// const [data, setData] = useState([])

//   useEffect(() => {
//     fetch("https://api.github.com/users/maliha63")
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//       setData(data)
      
//     })
//   }, []);
console.log(data);
  return (
    <>
   <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl rounded-md">
      <div className="flex flex-col justify-center items-center">
        <img className="rounded-xl" src={data.avatar_url} alt="Git picture" width={300} />
      </div>
      <div>
        <p>Name: {data.name}</p>
        <p>Github Username: {data.login}</p>
        <p>Repos: {data.public_repos}</p>
        <p>Github followers: {data.followers}</p>
        <p>Github following : {data.following}</p>
        <p>Bio: {data.bio}</p>
      </div>
    </div>
    </>
  );
};

export default Github; 

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/maliha63')
  return response.json()
  
  
}