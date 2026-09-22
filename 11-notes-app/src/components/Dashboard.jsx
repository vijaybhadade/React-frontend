import {useState} from "react";
import users from "./users.js";
import StoreNote from "./StoreNote";
import AddNote from "./FormStructure";
import Header from "./Header";

function Dashboard() {

  const[notes,setNotes]=useState(users);

  function  addNotes(newNote)
  {
    setNotes((prev)=>[...prev,newNote]);
  }

  function removeNotes(id) {
    setNotes(prev => prev.filter(note => note.id !== id));
}
  return (
    <>
       <Header/>
       <div className=" bg-slate-100 flex flex-row justify-between">
         <AddNote onAdded={addNotes}/>
         <div className="w-2/3 flex flex-col gap-3 mt-5">
          <h3 className="font-bold ml-4">Notes:</h3>
            {notes.map((note)=>(            
            <StoreNote key={note.id} id={note.id}Title={note.Title} Content={note.Content} removeNotes={removeNotes}/>
         ))}
         </div>
        
       </div>
      
    </>
  )
}

export default Dashboard;
