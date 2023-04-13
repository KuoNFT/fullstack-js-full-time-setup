import styles from '../styles/Home.module.css';
import NewMainProd from './NewMainProd';
import MainProd from './MainProd'


function Home() {
  return (
    <div className="home">

      <header className={styles.header}>
        <div className={styles.homeHeaderBar}>
          <div>menu</div>
          <span>MUSIC STORE</span>
          <div>account/location/cart</div>
        </div>

        <div className={styles.homeHeaderBottom}>

        </div>
      </header>

      <div className={styles.content}>
        <div className={styles.newProductMain}>
          {/*{NewMainProd}*/}
        </div>
        
        <div className={styles.productMain}>
          {/*{MainProd}*/}
        </div>
      </div>

      <div className={styles.footer}>
        <span>ABOUT</span>
        <span>CONTACT</span>
        <span>SUPPORT</span>
        <span>STORES</span>
      </div>


    </div>
  );
}

export default Home;
// On va avoir un component home avec un header, un footer, une div content
//header contiendra un component home header bar , un component home header bottom
// content contiendra : un component new product main  et 4 compenents products main