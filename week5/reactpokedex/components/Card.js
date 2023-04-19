import React from 'react';
import styles from '../styles/Card.module.css'

function Card({ pokemon }) {
  const type = pokemon.types[0].type.name;
  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

  const typeColors = {
    grass: '#78C850',
    fire: '#F08030',
    water: '#6890F0',
    bug : '#A8B820',
    ground: '#E0C068',
    electric: '#F8D030',
    poison: '#A040A0',
    normal: '#A8A878',
    fighting: '#C03028'
  };
  
  const backgroundColor = typeColors[type] || 'gray';

  const style = { backgroundColor}

  return (
    <div className={styles.card} style={style}>
    <div className={`pokemon ${type}`} style ={style}>
      <div className={styles.imgContainer}>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
          alt={name}
        />
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <small className={styles.type}>
          Type: <span>{type}</span>
        </small>
      </div>
    </div>
    </div>
  );
}

export default Card;
