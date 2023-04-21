import Image from 'next/image';
import styles from '../styles/Home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      <Image src="/logo.png" alt="Logo" width={500} height={200} />

      <div className={styles.counterContainer}>
        <button className={styles.decrementBtn} id="decrementBtn">-</button>
        <span className={styles.counter}>0</span>
        <button className={styles.incrementBtn} id="incrementBtn">+</button>
      </div>
    </div>
  );
}

export default Home;
