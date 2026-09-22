import React, { createContext } from "react";
import Child from "./Child"; // Fixed: Added missing import

export const UserContext = createContext();

// Fixed: Capitalized component name to match React standards
function Parent1() {
  const username = "vijay";

  return (
    <UserContext.Provider value={username}>
      <Child />
    </UserContext.Provider>
  );
}

export default Parent1;