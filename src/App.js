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

  const loadFilteredPokemons = () => {
    if (filteredPokemons.length)
      return filteredPokemons.map((pokemon) => (
        <Card key={pokemon.id} pokemon={pokemon} />
      ));
    else return <h1>There is no such pokemon.</h1>;
  };

  return (
    <>
      <Navbar inputValue={inputValue} handleOnChange={handleOnChange} />
      <div className="cardsContainer">
        {pokemons.length ? loadFilteredPokemons() : <h1>Loading. . .</h1>}
      </div>
    </>
  );
}

export default App;
