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

  return (
    <div className={styles.container}>
      <img src="logo.png" className={styles.logo} />
      <h4 className={styles.text}>Number of burgers selected: {selectedBurgers.length}</h4>
      <div className={styles.burgerContainer}>
        {burgers}
      </div>
      <p>Hi All, Explore <a href="https://drimmake.com/">https://drimmake.com/</a> for learn more.</p>
    </div>
  );
}

export default Home;