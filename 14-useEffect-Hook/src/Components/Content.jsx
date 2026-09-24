 import {useState,useEffect} from "react";
 //if useEffect is [] then execute one otherwise using dependancies name then every time dependance update then executed.
 function Content()
 {
   const [count,setCount]=useState(0);

   useEffect(()=>{
    setTimeout(()=>{
        console.log("Timeout is executed!");
    })
   },[count]);
    return(
        <div className=" flex flex-col items-center">
          <h1 className=" font-bold ">{count}</h1>
           <button onClick={()=>setCount(count+1)} className=" bg-green-300 border p-2 border-amber-950 rounded-2xl  cursor-pointer fonrt-bold text-3xl text-stone-950">increase</button>
        </div>
    );
 }

 export default Content;