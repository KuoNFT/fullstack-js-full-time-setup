import styles from '../styles/Home.module.css';
import Dice from './Dice'

function Home() {
  const dicesData = [
    { number: rollDice() },
    { number: rollDice() },
    { number: rollDice() },
    { number: rollDice() },
    { number: rollDice() },
  ];

  function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }

  const dices = dicesData.map((data, index) => {
    return <Dice key={index} number={data.number} />;
  });


  return (
    <div className={styles.main}>
      <div ></div>
      <div className={styles.diceContainer}>
        {dices}
      </div>
    </div>
  );
}

export default Home;