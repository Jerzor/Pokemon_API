import React from "react";
import "../styles/Card.css";

const Card = ({ pokemon }) => {
  return (
    <div className="cardContainer">
      <div className="cardHeader">
        <h3 className="cardName">{pokemon.name}</h3>
        <p>No. {pokemon.number}</p>
      </div>
      <img className="cardImg" src={pokemon.imageUrlHiRes} alt={pokemon.name} />
      <div className="cardFooter">
        <p>
          <span>Rarity:</span> {pokemon.rarity ? pokemon.rarity : "???"}
        </p>
        <p>
          <span>Series:</span> {pokemon.series ? pokemon.series : "???"}
        </p>
        <p>
          <span>Set:</span> {pokemon.set ? pokemon.set : "???"}
        </p>
      </div>
    </div>
  );
};

export default Card;
