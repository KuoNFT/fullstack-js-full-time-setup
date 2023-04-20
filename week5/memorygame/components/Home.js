import { useState, useEffect  } from 'react';
import Card from './Card';
import styles from '../styles/Home.module.css';

function Home() {
  const deck = [
    { id: 1, name: 'billiard ball', image: '/billiardball.svg' },
    { id: 2, name: 'billiard ball', image: '/billiardball.svg' },
    { id: 3, name: 'bubble tea', image: '/bubbletea.svg' },
    { id: 4, name: 'bubble tea', image: '/bubbletea.svg' },
    { id: 5, name: 'cactus', image: '/cactus.svg' },
    { id: 6, name: 'cactus', image: '/cactus.svg' },
    { id: 7, name: 'dog', image: '/dog.svg' },
    { id: 8, name: 'dog', image: '/dog.svg' },
    { id: 9, name: 'laptop', image: '/laptop.svg' },
    { id: 10, name: 'laptop', image: '/laptop.svg' },
    { id: 11, name: 'octopus', image: '/octopus.svg' },
    { id: 12, name: 'octopus', image: '/octopus.svg' },
    { id: 13, name: 'strawberry', image: '/strawberry.svg' },
    { id: 14, name: 'strawberry', image: '/strawberry.svg' },
    { id: 15, name: 'sunglasses', image: '/sunglasses.svg' },
    { id: 16, name: 'sunglasses', image: '/sunglasses.svg' },
  ];

  const [shuffledDeck, setShuffledDeck] = useState([]);

  const shuffleDeck = () => {
    return deck.sort(()=>0.5- Math.random())
  }

  useEffect(() => {
    setShuffledDeck(shuffleDeck)

  }, [])

 
  const [matched, setMatched] = useState([]);

  const [selected, setSelected] = useState([]);

  const selectCard = (id, name) => {
    if(selected.length < 2 ){
    setSelected((prevState)=>[...prevState, {id, name}]);
  }
  };

  useEffect(() => {
    if (selected.length === 2) {
      const [firstCard, secondCard] = selected;
      if (firstCard.name === secondCard.name) {
        setMatched((prevState) => [...prevState, firstCard.id, secondCard.id]);
      }
      setTimeout(() => setSelected([]), 1000);
    }
  }, [selected]);


  useEffect(() => {
    if (matched.length === deck.length) {
      setTimeout(() => {
        setShuffledDeck(shuffleDeck());
        setMatched([]);
      }, 2000);
    }
  }, [matched]);
  

  const cardsToDisplay = shuffledDeck.map((card) => {
    return (
      <Card
        key={card.id}
        id={card.id}
        name={card.name}
        image={card.image}
        selectCard={selectCard}
        selected={selected.some((selectedCard) => selectedCard.id === card.id)}
        matched={matched.includes(card.id)}
      />
    );
  });

  return (
    <div className={styles.home}>
      <div className={styles.header}>
        <h1 className={styles.headerTitle}>
          Memory Game 🧠
        </h1>
        <div className={styles.headerDivider} />
      </div>

      <div className={styles.main}>
        <div className={styles.grid}>
          {cardsToDisplay}
        </div>
      </div>
    </div>
  );
}

export default Home;
