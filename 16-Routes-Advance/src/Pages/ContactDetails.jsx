import React from 'react';
import { useParams } from "react-router-dom";

const ContactDetails = () => {
  const { id } = useParams(); // Matches :id in App.jsx

  return (
    <div>
      <h1 className="text-xl font-bold">Contact Details Page for ID: {id}</h1>
    </div>
  );
};

export default ContactDetails;