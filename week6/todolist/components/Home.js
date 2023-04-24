import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.addContainer}>
          <input type="text" placeholder="Task" id="taskName" className={styles.addTask} />
          <div className={styles.urgentSection}>
            <input type="checkbox" id="urgent" className={styles.urgentCheckbox} />
            <span className={styles.urgent}>URGENT</span>
          </div>
          <button id="add" className={styles.button}>ADD TASK</button>
        </div>

        <div className={styles.tasksContainer}>
          <div className={styles.task}>
            <div className={styles.taskSection}>
              <input type="checkbox" className={styles.completeCheckbox} />
              <p>Go to the grocery store</p>
              <span className={styles.urgentBadge}>URGENT</span>
            </div>
            <FontAwesomeIcon icon={faTrash} className={styles.delete} />
          </div>

          <div className={styles.task}>
            <div className={styles.taskSection}>
              <input type="checkbox" className={styles.completeCheckbox} />
              <p>Pay the bills</p>
            </div>
            <FontAwesomeIcon icon={faTrash} className={styles.delete} />
          </div>

          <div className={styles.task}>
            <div className={styles.taskSection}>
              <input type="checkbox" className={styles.completeCheckbox} />
              <p>Call Grandma</p>
            </div>
            <FontAwesomeIcon icon={faTrash} className={styles.delete} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
