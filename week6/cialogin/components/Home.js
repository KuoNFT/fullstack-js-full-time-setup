import Image from 'next/image';
import styles from '../styles/Home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      <Image src="/logo.png" alt="Logo" width={200} height={200} />

      <h1>CIA LOGIN</h1>
      <div className={styles.inputContainer}>
        <span>AGENT ID</span>
        <input type="text" id="agentId" />
      </div>

      <div className={styles.inputContainer}>
        <span>PASSWORD</span>
        <input type="password" id="password" />
      </div>

      <button id="login">LOGIN</button>
    </div>
  );
}

export default Home;
