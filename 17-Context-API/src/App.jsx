import Navbar from "./Components/Navbar";
import Button from "./Components/Button";
import './App.css'
import {useContext} from "react";
import {ThemeDataContext} from "./Context//ThemeContext";

function App() {
  //access context
  const data=useContext(ThemeDataContext);
  console.log(data);
  return (
    <>
   <Navbar/>
   <Button/>
    </>
  )
}

export default App
