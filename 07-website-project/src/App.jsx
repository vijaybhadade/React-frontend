import Section from "./components/Section1/Section"
import Section2 from "./components/Section2/Section2"
import users from "./components/data/users.js"
import './App.css'

function App() {
  

  return (
    <>
   < Section users={users}/>
   <Section2/>
    </>
  )
}

export default App
