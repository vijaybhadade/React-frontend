import React from "react";

function Parent1()
{
    const handleData=(data)=>{
        console.log(data);
    }

    return <Child sendData={handleData}/>
}

function Child(props)
{
    return <button onClick={()=>props.sendData("hello vijay")}>Click</button>
}

export default Parent1;