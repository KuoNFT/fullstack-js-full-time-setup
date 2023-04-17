import { useState } from 'react';
import Dice from './Dice';
import styles from '../styles/Home.module.css';

function Home() {
const [gameStarted, setGameStarted] = useState(false);
const [diceValues, setDiceValues] = useState([1, 1, 1, 1, 1]);

const handleLaunchClick = () => {
setDiceValues(getRandomDiceValues());
setGameStarted(true);
};

const getRandomDiceValues = () => {
return [
getRandomValue(),
getRandomValue(),
getRandomValue(),
getRandomValue(),
getRandomValue(),
];
};

const getRandomValue = () => {
return Math.floor(Math.random() * 6) + 1;
};

const dices = diceValues.map((value, index) => (
<Dice key={index} number={value} alt={value.toString()} />
));

return (
<div className={styles.container}>
<div>
<div className={styles.triangleLeft}></div>
<div className={styles.triangleLeftRed}></div>
<div className={styles.triangleLeft}></div>
</div>
<div className={styles.middleSection}>
<img src="logo.png" alt="Logo" className={styles.logo} />
<div className={styles.board}>
{gameStarted && dices}
</div>
{!gameStarted && (
<button className={styles.launchBtn} onClick={handleLaunchClick}>
Lancer les dés
</button>
)}
</div>
<div>
<div className={styles.triangleRight}></div>
<div className={styles.triangleRightRed}></div>
<div className={styles.triangleRight}></div>
</div>
</div>
);
}

export default Home;