import { useSelector, useDispatch } from 'react-redux';
import { addActivity } from '../reducers/activities';
import Activity from './Activity';
import styles from '../styles/Home.module.css';
import { useState } from 'react';

function Home() {
  const activities = useSelector((state) => state.activities.value);
  const dispatch = useDispatch();
  const [activityName, setActivityName] = useState('');

  const handleAddActivity = () => {
    if (activityName.trim() !== '') {
      dispatch(addActivity({ name: activityName, timer: 0, id: Date.now() }));
      setActivityName('');
    }
  };

  const activitiesComponents = activities.map((data) => {
    return <Activity key={data.id} name={data.name} timer={data.timer} id={data.id} />;
  });

  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <div className={styles.trackerWindow}>
          <div className={styles.trackerHeader}>Time tracker</div>
          <div className={styles.addSection}>
            <input
              type="text"
              placeholder="Activity name"
              id="activityName"
              value={activityName}
              onChange={(e) => setActivityName(e.target.value)}
            />
            <button id="add" onClick={handleAddActivity}>
              Add activity
            </button>
          </div>
        </div>
      </div>

      <div className={styles.bottomSection}>{activitiesComponents}</div>
    </div>
  );
}

export default Home;