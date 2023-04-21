import Image from 'next/image';
import DarkStatus from './DarkStatus';
import styles from '../styles/Home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      <Image src="/light.png" alt="Light" width={128} height={128} id="switch" className={styles.switch} />
      <DarkStatus />
    </div>
  );
}

export default Home;
