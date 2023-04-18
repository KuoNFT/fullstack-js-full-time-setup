import styles from '../styles/Dice.module.css';
import { useState, useEffect } from 'react';

function Dice({ initialNumber, onDiceClick }) {
  const [number, setNumber] = useState(initialNumber);
  const [nbClicks, setNbClicks] = useState(0);

  const handleClick = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setNumber(randomNumber);
    setNbClicks((prevNbClicks) => prevNbClicks + 1);
    onDiceClick();
  };


  return (
    <div>
      <img className={styles.dice} src={`${number}.png`} alt={number} onClick={handleClick} />
      <span className={styles.counter}>{nbClicks}</span>
    </div>
  );
}

export default Dice;