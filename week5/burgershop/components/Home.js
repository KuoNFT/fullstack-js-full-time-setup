import { useState } from 'react';
import Burger from './Burger';
import styles from '../styles/Home.module.css';

function Home() {
  const [selectedBurgers, setSelectedBurgers] = useState([]);

  const selectBurger = (newBurger) => {
    setSelectedBurgers([...selectedBurgers, newBurger]);
  }

  const removeBurger = (burgerToDelete) => {
    setSelectedBurgers(selectedBurgers.filter(burger => burger !== burgerToDelete));
  }

  const burgersData = [
    { name: 'The New Yorker', image: 'newyorker.jpg' },
    { name: 'The Californian', image: 'californian.jpg' },
    { name: 'The Parisian', image: 'parisian.jpg' },
  ];

  const burgers = burgersData.map((data, i) => {
    return <Burger key={i} name={data.name} image={data.image} selectBurger={selectBurger} removeBurger={removeBurger} />;
  });

  const burgerCounter = selectedBurgers.reduce((counter, burger) => {
    counter[burger] = (counter[burger] || 0) + 1;
    return counter;
  }, {});

  return (
    <div className={styles.container}>
      <img src="logo.png" className={styles.logo} />
      <h4 className={styles.text}>Nombre de burgers sélectionnés : <span id="counter">{Object.values(burgerCounter).reduce((a, b) => a + b, 0)}</span></h4>
      <div className={styles.burgerContainer}>
        {burgers}
      </div>
     
    </div>
  );
}

export default Home;
