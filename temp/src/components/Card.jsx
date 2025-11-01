import React from 'react'
import "../App.css"
import { AiFillStar } from "react-icons/ai";
import "../index.css"
import { IoBagHandle } from "react-icons/io5";

const Card = ({item}) => {
  return (
    <article className="card">
        <div className="uppercard">
                <img src={item.img} alt="" />
        </div>
        <div className="lowercard">
            <div className="shoename">
                {item.title}
            </div>
            <div className="shoereview">
                   <div>
                     <AiFillStar className="rating-star" />
                    <AiFillStar className="rating-star" />
                    <AiFillStar className="rating-star" />
                    <AiFillStar className="rating-star" />
                   </div>
                    <p>(123 reviews)</p>
            </div>
            <div className="shoeprice">
                <div>$ <del>{item.prevPrice}</del>{item.newPrice}</div>
                <div style={{color:"gray"}}><IoBagHandle/></div>
            </div>
        </div>
    </article>
  )
}

export default Card