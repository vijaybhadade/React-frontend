import {useAuth} from "../context/AuthContext"
import {useNavigate} from "react-router-dom"

const Login = ()=>{
    const {login} =useAuth();
    const navigate=useNavigate();

    const handleLogin= (role)=>{
        login("Nitin","abc@123",role);

        if(role==="admin")
        {
            navigate("./Admin.jsx");
        }
        else
        {
            navigate("./Dashboard.jsx")
        }
    }
    return(
        <div>
              <h2>Login Page</h2>
              <button onClick={()=>handleLogin("admin")}>Login</button>
              <button onClick={()=>handleLogin("user")}>Login as user</button>
        </div>
    )
}

export default Login;