import styles from '../styles/Home.module.css';
import Dice from './Dice'
import Triangle from './Triangle'
import Header from './Header'

function Home() {

  function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }
  
  const dicesData = [
    { number: rollDice() },
    { number: rollDice() },
    { number: rollDice() },
    { number: rollDice() },
    { number: rollDice() },
  ];



  const dices = dicesData.map((data, index) => {
    return <Dice key={index} number={data.number} />;
  });

  const triangleLeftData = [  
  {color: 'black', direction: 'left', className: styles.triangleLeft},
  {color: 'bordeaux', direction: 'left' , className: styles.triangleMiddleLeft},
  {color: 'black', direction: 'left', className: styles.triangleLeft},
];

const triangleRightData = [  
  {color: 'black', direction: 'right', className: styles.triangleRight},
  {color: 'bordeaux', direction: 'right', className: styles.triangleMiddleRight},
  {color: 'black', direction: 'right', className: styles.triangleRight},
];

const trianglesLeft = triangleLeftData.map((data) => {

  return <Triangle color={data.color} direction={data.direction} className={data.className} />
})

const trianglesRight = triangleRightData.map((data, index) => {
  return <Triangle color={data.color} direction={data.direction} className={data.className} />
})




  return (
    <body>
    <div className={styles.main}>
      <Header/>
      <div className={styles.left} style={{ position: 'absolute', top: 0 }}>      
        {trianglesLeft}
      </div>
      <div className={styles.right} style={{ position: 'absolute', top: 0, right: 0 }}>      
        {trianglesRight}
      </div>

      <div className={styles.home}>
        <div className={styles.circle} >
          <div className={styles.diceContainer}>
            {dices}
          </div>
        </div>
      </div>


    </div>
    </body>
  );
}

export default Home;