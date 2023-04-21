import styles from '../styles/Home.module.css';


function Home() {

  // Insert your code here

  return (
    <div className={styles.globalContainer}>
      <h1 className={styles.title}>My World Tour</h1>
      <span className={styles.counter}>Number of countries: 0</span>
      <div className={styles.countriesContainer}>
        
      </div>
    </div>
  );
}


export default Home;