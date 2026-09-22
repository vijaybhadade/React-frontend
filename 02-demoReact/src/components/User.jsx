import React, { useEffect, useState } from "react";

function User(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("hello");
   
    // Runs only once when the component mounts
  }, [count]); 

  return (
    <div>
      <h1>
        {props.name} {props.age} {props.skills.join(", ")}{" "}
        {props.isStudent ? "Student" : "Not a Student"}
      </h1>
      <p>Count: {count}</p>
    </div>
  );
}

export default User;