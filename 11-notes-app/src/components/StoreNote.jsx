import {Trash} from "lucide-react";
function StoreNote({id,Title,Content,removeNotes}) {
   
         
    return (
           
            <div className=" bg-blue-200  border-b-blue-300 h-30 w-120 ml-5 rounded-sm" >
                <div className=" flex justify-between">
                    <h3 className="font-bold ml-5 mt-8">Title: {Title}</h3>
                <button className="border-amber-950 rounded-2xl shadow-amber-600 p-1 mr-3 w-9 
                cursor-pointer hover:bg-red-200"
                onClick={()=>removeNotes(id)}
                ><Trash color="red"/></button>
                </div>
                <p className="ml-5 mt-5" >
                 <b>Content:</b>  {Content}
                </p>
                
            </div>
        
    );
}

export default StoreNote;