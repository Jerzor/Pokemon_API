import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

const API = "https://api.pokemontcg.io";
const VERSION = "v1";
const RESOURCE = "cards";

const ENDPOINT = `${API}/${VERSION}/${RESOURCE}`;

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };

  const fetchData = () => {
    axios
      .get(ENDPOINT)
      .then((response) => {
        console.log(response.data.cards);
        setPokemons(response.data.cards);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar inputValue={inputValue} handleOnChange={handleOnChange} />
      <div className="cardsContainer">
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
}

export default App;
