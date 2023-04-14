import styles from '../styles/Movie.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


function Movie () { 

    const voteCount = 7;
    const stars = [];
    for (let i = 0; i < 10; i++) {
      if (i < voteCount) {
        stars.push(<FontAwesomeIcon key={i} icon={faStar} />);
      } else {
        stars.push(<FontAwesomeIcon key={i} icon={faStar} color="#ccc" />);
      }
    }
    
return (
    <div className={styles.card}>
      <img className={styles.image} src='poster.jpg' alt='poster'/>
      <div className={styles.textContainer}>
        <span className={styles.name}>Name</span>
        <p className={styles.description}>Descrption</p>
        <span className={styles.vote}>{stars} ({voteCount} votes)</span>
      </div>
    </div>
   );

}

export default Movie;