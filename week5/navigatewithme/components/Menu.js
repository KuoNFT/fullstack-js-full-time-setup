import styles from '../styles/Menu.module.css';
import Link from 'next/link';

function Menu() {
  return (
    <div className={styles.header}>
      <span className={styles.logo}>Navigate with me</span>
      <div className={styles.linkContainer}>
        <Link href="/">Home</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/about">About</Link>
      </div>
    </div>
  );
}

export default Menu;
