import {Routes,Route} from "react-router-dom"
import Home from "./Components/Home";
import About from "./Components/About";
import Content from "./Components/Content";
import './App.css'

function App() {
 

  return (
    <>
    <Routes>
      < Route path="/" element={<Home/>}/>
      < Route path="/About" element={<About/>}/>
      < Route path="/Content" element={<Content/>}/>
    </Routes>
    </>
  )
}

export default App
