import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

function Home() {
  const [agentId, setAgentId] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if (agentId === 'codybanks' && password === 'qwerty123') {
      setIsLoggedIn(true);
    }
  };

  if (isLoggedIn) {
    return <div>Welcome, agent Cody Banks.</div>;
  }

  return (
    <div className={styles.container}>
      <Image src="/logo.png" alt="Logo" width={200} height={200} />

      <h1>CIA LOGIN</h1>
      <div className={styles.inputContainer}>
        <span>AGENT ID</span>
        <input
          type="text"
          id="agentId"
          value={agentId}
          onChange={(e) => setAgentId(e.target.value)}
        />
      </div>

      <div className={styles.inputContainer}>
        <span>PASSWORD</span>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button id="login" onClick={handleLogin}>
        LOGIN
      </button>
    </div>
  );
}

export default Home;
