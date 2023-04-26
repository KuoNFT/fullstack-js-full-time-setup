import styles from '../styles/Activity.module.css';

function Activity(props) {
  const timer = new Date(props.timer * 1000).toISOString().slice(11, 19);

  return (
    <>
      <div className={styles.activityWindow}>
        <div className={styles.activityHeader}>
          {props.name}
          <div className={styles.delete}>X</div>
        </div>

        {timer}

        <div className={styles.buttonSection}>
          <button>Start</button>
          <button>Stop</button>
        </div>
      </div>
    </>
  );
}

export default Activity;
