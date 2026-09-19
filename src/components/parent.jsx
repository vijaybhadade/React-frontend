
//this is way parent to child data passing.

import React,{useState,useEffect} from "react";

function parent()
{
    function handleclick(){
        console.log("button is clicked");
    }
    
    return <button onClick={()=>handleclick}>click</button>
}

export default parent;