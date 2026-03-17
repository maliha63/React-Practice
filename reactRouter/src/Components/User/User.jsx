import React from "react";
import { useParams } from "react-router-dom";

function User() {
  //dynamic segment:

  //this is how you can take data dynamically using useParams hook.

  //If a path segment starts with : then it becomes a "dynamic segment". When the route matches the URL, the dynamic segment will be parsed from the URL and provided as params to other router APIs.
  const { userid } = useParams();
  return (
    <div className="bg-gray-600 text-white text-3xl text-center p-4">
      User:{userid}
    </div>
  );
}

export default User;
