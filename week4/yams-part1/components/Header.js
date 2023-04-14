import React from 'react';
import styles from '../styles/Header.module.css';

function Header() {

  return (
    <header className={styles.header}>
      <img src="/logo.png" alt="Logo" className='image' style={{width: '18vh',
    height: '6vh'} }/>
    </header>
  );
}

export default Header;