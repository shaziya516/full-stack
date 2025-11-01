import React from "react";
import { AiFillStar } from "react-icons/ai";

const Card = (props) => {
  return (
    <div className="card">
      <div className="upper-card">
        <img src={props.img} alt="" className="image" />{" "}
      </div>
      <div className="lower-card">
        <div className="name">{props.title}</div>
        <div className="review">{props.reviews}</div>
        <div className="prevprice">{props.prevprice}</div>
         <div className="newprice">{props.newprice}</div>
        {/* <div className="compaany">{props.company}</div>
        <div className="color">{props.color}</div>
        <div className="category">{props.category}</div> */}
        
      </div>
    </div>
  );
};

export default Card;
