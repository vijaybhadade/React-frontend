import React from "react"

const AndOperator=()=>{
    const age=18;
    const gender="Male";
  return(
    <div>
        <h1>Welcome to DashBoard</h1>
        {
            age>=18 && gender== "Male" ? (<h1> You are eligeble for man power</h1>) : (<h2> You are not eligeble for man power</h2>)
        }
        <button onClick={()=>alert("Data submited")} >Submit</button>
    </div>
  )
}

export default AndOperator;