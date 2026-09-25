
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeContext from "./Context/ThemeContext"
createRoot(document.getElementById('root')).render(
    //Wtap themeContext 
  <ThemeContext>
    <App />
  </ThemeContext>
  
)
