import React from "react";
import { Bookmark } from "lucide-react";

function Card({img,price,title,time,level,location,company,}) {
  return (
    <div className="Card">
      <div className="top">
        {/* Use props.img dynamically here */}
        <img src={img} alt="Company logo" />
        <button className="btn-top">
          Save <Bookmark size={15} />
        </button>
      </div>

      <div className="center">
        <h3>
          {company} <span>5 days ago</span>
        </h3>
        <h2>{title}</h2>
        <div className="center-tag">
          <h4>{time}</h4>
          <h4>{level}</h4>
        </div>
      </div>

      <div className="bottom">
        <div className="btm-info">
          <h3>{price}/hr</h3>
          <p>{location}</p>
        </div>
        <button className="btm-btn">Apply Now</button>
      </div>
    </div>
  );
}

export default Card;