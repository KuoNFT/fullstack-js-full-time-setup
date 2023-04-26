import { useState, useEffect } from 'react';
import styles from '../styles/Activity.module.css';

function Activity(props) {
  const [timer, setTimer] = useState(props.timer);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  const formattedTimer = new Date(timer * 1000).toISOString().slice(11, 19);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  return (
    <>
      <div className={styles.activityWindow}>
        <div className={styles.activityHeader}>
          {props.name}
          <div className={styles.delete}>X</div>
        </div>

        {formattedTimer}

        <div className={styles.buttonSection}>
          <button onClick={handleStart}>Start</button>
          <button onClick={handleStop}>Stop</button>
        </div>
      </div>
    </>
  );
}

export default Activity;
