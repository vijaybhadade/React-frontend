import React, { useState } from "react";
import Home from "./Home.jsx";

const IfElse = () => {
  const isLogged = true;
  // Using 'mode' to track state (false = light/default, true = dark)
  const [mode, setMode] = useState(false);

  return (
    <div
      style={{
        backgroundColor: mode ? "#222" : "#fff",
        color: mode ? "#fff" : "#000",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      {isLogged ? <h1>Logged in successfully..</h1> : <h1>Login failed</h1>}

      <button
        onClick={() => setMode(!mode)}
        style={{
          padding: "8px 16px",
          cursor: "pointer",
        }}
      >
        {/* Fixed lowercase 'mode' matching state definition */}
        {mode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
};

export default IfElse;