import React from "react";
import Card from "./Card";
import "../App.css";
import "../index.css";
const Productresult = ({products}) => {
  return (
    <section className="result">
      {products.map((item,i)=>(
        <Card item={item} key={i}/>
      ))}
    </section>
  );
};

export default Productresult;
