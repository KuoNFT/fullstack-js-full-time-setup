import React, { useState, useEffect } from 'react';
import Card from './Card';
import styles from '../styles/Home.module.css'

function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [startIndex, setStartIndex] = useState(1);

  useEffect(() => {
    fetchPokemons();
  }, [startIndex]);

  const fetchPokemons = async () => {
    const newPokemons = [];

    for (let i = startIndex; i < startIndex + 15; i++) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      const data = await response.json();
      newPokemons.push(data);
    }

    setPokemons([...pokemons, ...newPokemons]);
  };

  const getNextPokemon = () => {
    setStartIndex(startIndex + 15);
  };

  return (
    <div>
      <h1>Pokedex</h1>
      <div className={styles.pokemonContainer}>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
      <button id="next" onClick={getNextPokemon}>
        Next
      </button>
    </div>
  );
}

export default Home;
