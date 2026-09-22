import { useState } from "react";
import {SavePlus} from "lucide-react";
function FormStructure({onAdded}) {
    const [Title, setTitle] = useState("");
    const [Content, setContent] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
       if(onAdded)
       {
        onAdded({id: new Date(),Title:Title,Content:Content})
       }
        setTitle("");
        setContent("");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className=" h-75 w-120  flex flex-col ml-4 mt-4    bg-blue-200 border-2 border-black rounded-2xl"
        >
            <h1 className="mt-5 underline underline-offset-1 font-bold ml-4 text-2xl">
                Add notes
            </h1>

            <label htmlFor="title" className=" ml-4 mt-4  font-bold">
                Title:
            </label>

            <input
                type="text"
                id="title"
                value={Title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter title"
                className="border-2 border-blue-300 bg-white rounded-sm mr-4 ml-4 px-3 py-2 w-[111] items-center"
               required/>

            <label htmlFor="content" className=" ml-4 mt-4  font-bold">
                Content:
            </label>

            <textarea
                name="content"
                id="content"
                value={Content}
                onChange={(e)=>setContent(e.target.value)}
                placeholder="Enter content....."
                className="border-2 border-blue-300 h-[35] bg-white rounded-sm mr-4 ml-4"
                required
            />

            <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white cursor-pointer   w-[111] mr-4 ml-4  rounded-sm px-3 py-2 mt-3"
            ><SavePlus />
                Add note
            </button>
        </form>

    );
}

export default FormStructure ;