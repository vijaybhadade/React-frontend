import React,{useRef} from "react";

function Login ()
{
    //create ref
    const inputRef= useRef(null);

    const handleClick=()=>{
        inputRef.current.focus();
    }
    return(
        <div>
            <input ref={inputRef} />
            <button onClick={handleClick}>Login</button>
        </div>
    );
}

export default Login;