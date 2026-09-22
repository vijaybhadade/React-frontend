//checke user login or not
import { Navigate } from "react-router-dom"
import { useAuth} from "../context/AuthContext"

const ProtectedRoute =({children,role})=>
{
    const {user}=useAuth();

    //Not logged in
    if(!user)
    {
        return <Navigate to="/login"/>
    }

    //Check Role
    if(role && user.role!==role)
    {
        return <Navigate to="./unauthorized" />
    }
    return children;
};

export default ProtectedRoute;