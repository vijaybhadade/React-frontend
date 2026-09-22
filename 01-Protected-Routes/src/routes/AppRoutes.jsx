import { Routes , Route} from "react-router-dom"
import {Login,Dashboard,Admin,Unauthorized,ProtectedRoute} from "../pages/Login"

const AppRoutes =() =>
{
    return (
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/Unauthorized" element={<Unauthorized/>}/>
        <Route path="/dashboard" element={<ProtectedRoute> <Dashboard/> </ProtectedRoute>}/>
        <Route path="/admin" element={<ProtectedRoute> <Admin/> </ProtectedRoute>}/>
      </Routes>
    )
}

export default AppRoutes;