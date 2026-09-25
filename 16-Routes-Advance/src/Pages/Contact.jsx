import React from 'react'
import { Link, Outlet } from "react-router-dom";

const Contact = () => {
  return (
    <div className="gap-4 flex flex-col">
      <h1>This is Contact page!</h1>
      <div className="flex gap-4">
        {/* Use relative paths (no leading slash) */}
        <Link to="HomeContact" className="text-2xl font-bold hover:underline underline-offset-2">Home-Contact</Link>
        <Link to="Busness" className="text-2xl font-bold hover:underline underline-offset-2">Business-Contact</Link>
      </div>
      
      {/* The nested component will render here */}
      <Outlet />
    </div>
  )
}

export default Contact;