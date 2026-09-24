
import './App.css'

function App() {
   

  // //store values form key-pair in localStorage in browser 
  //  localStorage.setItem("username","vijay bhadade");
  //  localStorage.setItem("age","21");
  //  localStorage.setItem("address","At post janwal");
  //  localStorage.setItem("Couser","MERN stack");
  //  localStorage.setItem("Institude","SevenMentor");
  //  localStorage.setItem("Location","fc road near shivajinagar");
  //  //getValue
  // const user= localStorage.getItem('username');
  //  //getValue
  // const age= localStorage.getItem('age');
  //  //getValue
  // const address= localStorage.getItem('address');
  //  //getValue
  // const Course= localStorage.getItem('Course');
  //  //getValue
  // const Institude= localStorage.getItem('Institude');
  //  //getValue
  // const Location= localStorage.getItem('Location');

  // console.log(`Username = ${user}, age = ${age} , address = ${address} , Course = ${Course} , institude = ${Institude} and Location = ${Location}`);

  // //remvoe items 
  // localStorage.removeItem("Location");

  //Array with localStorage '
     //Store array 
 const array = {
    username: "vijay",
    age: 21
  };

  // Store object
  localStorage.setItem("array", JSON.stringify(array));

  // Get object
  const users = JSON.parse(localStorage.getItem("array"));

  console.log("users :", users.username);
  console.log("age :", users.age);

  return (
    <>
    <h1>This is localStorage</h1>
    </>
  )
}

export default App
