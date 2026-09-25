import React from 'react';
import { useNavigate } from "react-router-dom"; // Import from react-router-dom

const NavBar2 = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-cyan-200 py-4 px-3 flex flex-wrap gap-2">
      <button 
        onClick={() => navigate('/')} 
        className="bg-emerald-700 text-2xl text-white font-semibold m-4 cursor-pointer rounded-2xl py-4 px-3 active:scale-95"
      >
        Return to Home
      </button>

      <button 
        onClick={() => navigate(-1)} 
        className="bg-emerald-700 text-2xl text-white rounded-2xl font-semibold m-4 cursor-pointer py-4 px-3 active:scale-95"
      >
        Back
      </button>
      <button 
        onClick={() => navigate(+1)} 
        className="bg-emerald-700 text-2xl text-white rounded-2xl font-semibold m-4 cursor-pointer py-4 px-3 active:scale-95"
      >
        Next 
      </button>
    </div>
  );
};

export default NavBar2;