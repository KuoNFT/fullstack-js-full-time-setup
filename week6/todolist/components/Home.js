import { useDispatch, useSelector } from 'react-redux';
import { addTask, deleteTask, toggleTask } from '../reducers/tasks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Home.module.css';

function Home() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);

  const handleAddTask = () => {
    const taskName = document.getElementById('taskName').value;
    const urgent = document.getElementById('urgent').checked;

    if (taskName.trim() !== '') {
      dispatch(addTask({ name: taskName, urgent, completed: false }));
      document.getElementById('taskName').value = '';
    }
  };

  const handleDeleteTask = (index) => {
    dispatch(deleteTask(index));
  };

  const handleToggleTask = (index) => {
    dispatch(toggleTask(index));
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.addContainer}>
          <input type="text" placeholder="Task" id="taskName" className={styles.addTask} />
          <div className={styles.urgentSection}>
            <input type="checkbox" id="urgent" className={styles.urgentCheckbox} />
            <span className={styles.urgent}>URGENT</span>
          </div>
          <button id="add" className={styles.button} onClick={handleAddTask}>
            ADD TASK
          </button>
        </div>

        <div className={styles.tasksContainer}>
          {tasks.map((task, index) => (
            <div key={index} className={styles.task}>
              <div className={styles.taskSection}>
                <input
                  type="checkbox"
                  className={styles.completeCheckbox}
                  checked={task.completed}
                  onChange={() => handleToggleTask(index)}
                />
                <p className={task.completed ? styles.completed : ''}>{task.name}</p>
                {task.urgent && <span className={styles.urgentBadge}>URGENT</span>}
              </div>
              <FontAwesomeIcon
                icon={faTrash}
                className={styles.delete}
                onClick={() => handleDeleteTask(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
