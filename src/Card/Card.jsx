import React from "react";
import "./Card.css";

const Card = ({ image, header, description }) => {
  return (
    <div className="card-box">
      <img src={image} alt="" />
      <h1>{header}</h1>
      <p>{description}</p>
      <button>Add To Cart</button>
    </div>
  );
};

export default Card;
