import styles from '../styles/Home.module.css';
import { useState } from 'react';

function Home() {
const [counter, setCounter] = useState(0);

const handleIncrement = () => {
setCounter(counter + 1);
};

const handleDecrement = () => {
  if (counter === 0 ) {
    setCounter(counter)
  } else {
setCounter(counter - 1)};
};

return (
<div className={styles.container}>
<img className={styles.logo} src="logo.png" />
<div className={styles.counterContainer}>
<button className={styles.decrementBtn} id="decrementBtn" onClick={() => handleDecrement()}>-</button>
<span className={styles.counter} id="counter">{counter}</span>
<button className={styles.incrementBtn} id="incrementBtn" onClick={() => handleIncrement()}>+</button>
</div>
</div>
);
}

export default Home;
