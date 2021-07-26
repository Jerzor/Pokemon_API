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
        setPokemons(response.data.cards);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  console.log(pokemons);

  return (
    <>
      <Navbar inputValue={inputValue} handleOnChange={handleOnChange} />
      <div className="cardsContainer">
        {filteredPokemons.length ? (
          filteredPokemons.map((pokemon) => (
            <Card key={pokemon.id} pokemon={pokemon} />
          ))
        ) : (
          <h1>Loading. . .</h1>
        )}
      </div>
    </>
  );
}

export default App;
