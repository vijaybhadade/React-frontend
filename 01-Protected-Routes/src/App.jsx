import './App.css'
import AppRoutes from "./routes/AppRoutes"
import {useAuth} from "./context/AuthContext"
function App() {
   const {user,logout} =useAuth();

  return (
    <div>
      <h1>Protected Route Example</h1>
      {
        user && (
          <>
          <h4>welcome {user.username }  ({user.role})</h4>
          <button onClick={logout}>Logout</button>
          </>
        )
      }
      <hr />
      <AppRoutes/>
    </div>
  )
}

export default App
