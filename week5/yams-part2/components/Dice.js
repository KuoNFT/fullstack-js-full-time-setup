

import { useState } from 'react';
import styles from '../styles/Dice.module.css';

function Dice(props) {
  const [value, setValue] = useState(props.number);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    const newValue = Math.floor(Math.random() * 6) + 1;
    setValue(newValue);
    setCount(count + 1);
  }

  return (
    <div>
      <img className={styles.dice} src={`${value}.png`} alt={value} onClick={handleClick} />
      <div className={styles.count}>{count}</div>
    </div>
  );
}

export default Dice;