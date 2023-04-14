import styles from '../styles/Home.module.css';
import Dice from './Dice'

function Home() {
  const dicesData = [
    { number: '1' },
    { number: '2' },
    { number: '3' },
    { number: '4' },
    { number: '5' },
  ];

  const dices = dicesData.map((data) => {
    return <Dice number={data.number} />;
  });

  return (
    <div>
      <div></div>
      {dices}
    </div>
  );
}

export default Home;