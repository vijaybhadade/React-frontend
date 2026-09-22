import {useState} from "react";

function PrintFunction()
{
     
    
     const handleSubmit=(event)=>
     {
        event.preventDefault();
        console.log("form submited!");
     }
   
    
    return(
        <div>
          <form onSubmit={handleSubmit}>
            <input type="text" /> <br />
            <button >submit</button>
          </form>
        </div>
    );
}

export default PrintFunction;