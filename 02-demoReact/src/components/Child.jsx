import { useContext } from "react";
import { UserContext } from "./Parent1"; // Note capitalized import match

function Child() {
  const name = useContext(UserContext);
  return <h1>Hello {name}</h1>;
}

export default Child;