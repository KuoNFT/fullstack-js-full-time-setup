import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Movie.module.css';

function Movie(props) {
  const stars = [];

  for (let i = 0; i < 10; i++) {
    if (i < props.voteAverage) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} />);
    } else {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} color="#ccc" />);
    }
  }
  return (
    <div className={styles.card}>
      
<img className={styles.image} src={props.poster} alt={props.title} />
      <div className={styles.textContainer}>
        <span className={styles.name}>{props.title}</span>
        <p className={styles.description}>{props.description}</p>
        <span className={styles.vote}>{stars} ({props.voteCount})</span>
      </div>
    </div>
  );
}

export default Movie;
