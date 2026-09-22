import React ,{ useEffect, useState }from "react";


function Demos()
{
     const [isLoggedIn,setIsLoggedIn]=useState(false);
     const user=["vijay","sidharth","suraj"];
    return (
     <div>
         <ul>
          {user.map((user)=>
          <li key={user.id}>{user}</li>)}
         </ul>
     </div>
    )
}

export default Demos;