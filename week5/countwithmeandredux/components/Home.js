import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../reducers/counter';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

function Home() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <Image src="/logo.png" alt="Logo" width={500} height={200} />

      <div className={styles.counterContainer}>
        <button
          className={styles.decrementBtn}
          id="decrementBtn"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.counter}>{counter}</span>
        <button
          className={styles.incrementBtn}
          id="incrementBtn"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Home;
