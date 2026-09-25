import React,{useContext} from 'react'
import {ThemeDataContext} from "../Context//ThemeContext";
const Button = () => {
    const data=useContext(ThemeDataContext);
    const handleChanges=()=>{
         data.setTheme(data.theme==="dark"?"light":"dark");
    }

  return (
    <div >
      <button className="border-2 border-amber-800 py-2 px-3 active:scale-95 cursor-pointer rounded-2xl hover:bg-amber-600 font-semibold m-5 " onClick={handleChanges}>ChangTheme</button>
    </div>
  )
}

export default Button;
