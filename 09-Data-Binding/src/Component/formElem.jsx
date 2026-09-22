import React, { useState } from "react";

function FormElem() {
    const [name, setName] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setName("");
    };

    return (
        <form onSubmit={handleChange} className="flex  justify-center items-center flex-col">
            <input
                type="text"
                placeholder="Enter values..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="
                    border
                    invalid:border-pink-500
                    invalid:text-pink-600
                    focus:border-sky-500
                    focus:outline
                    focus:outline-sky-500
                    disabled:border-gray-200
                    disabled:bg-gray-50
                    disabled:text-gray-500
                    w-50 h-9 m-5 rounded-3xl
                    font-medium px-3 py-2
                "
            />

            

            <button type="submit" className="border-black border-2 w-20 h-10  bg-blue-300 text-white rounded-2xl hover:bg-blue-500">Submit</button>

            <p>{name}</p>
        </form>
    );
}

export default FormElem;