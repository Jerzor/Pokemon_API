import React from "react";
import "../styles/Card.css";

const Card = ({ pokemon }) => {
  return (
    <div className="cardContainer">
      <h3 className="cardName">{pokemon.name}</h3>
      <img className="cardImg" src={pokemon.imageUrlHiRes} alt={pokemon.name} />
    </div>
  );
};

export default Card;
