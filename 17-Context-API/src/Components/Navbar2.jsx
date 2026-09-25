import React,{useContext} from 'react'
import {ThemeDataContext} from "../Context/ThemeContext";
const Navbar2 = () => {
    const data=useContext(ThemeDataContext);
  return (
    <div className="nav2 flex gap-10 font-semibold">
        <h4>Home</h4>
        <h4>About</h4>
        <h4>Contact</h4>
        <h4>{data.theme}</h4>
    </div>
  )
}

export default Navbar2;
