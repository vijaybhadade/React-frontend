import React from "react";


const SwitchCase = () => {
  const role = "Guest";
  let content;

  switch (role) {
    case "admin":
      content = <h2>Admin content</h2>;
      break;

    case "User":
      content = <h2>User Panel</h2>;
      break;

    case "Guest":
      content = <h2>Guest Panel</h2>;
      break;

    default:
      content = <h2>Invalid user</h2>; 
  }

  return (
    <div>
      {content}
    </div>
  );
};


export default SwitchCase;