import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCamera, faHeart, } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Movie.module.css';

function Movie(props) {
const [personalNote, setPersonalNote] = useState(0);
const [watchCount, setWatchCount] = useState(0);
const [like, setLike] = useState(false);



const stars = [];
for (let i = 0; i < 10; i++) {
let style = {};
if (i < props.voteAverage - 1) {
style = { 'color': '#f1c40f' };
}
stars.push(<FontAwesomeIcon key={i} icon={faStar} style={style} />);
}

const personalStars = [];
for (let i = 0; i < 10; i++) {
let style = {cursor: 'pointer'};
if (i < personalNote) {
style = { 'color': '#2196f3', cursor: 'pointer'};
}
personalStars.push(<FontAwesomeIcon key={i} icon={faStar} onClick={() => setPersonalNote(i + 1)} className="note" style={style} />);
}


const watchStyle = watchCount > 0 ? { color: '#e74c3c', cursor:'pointer' } : {cursor: 'pointer'};

const handleWatchClick = () => {
  setWatchCount(watchCount + 1);
};


const handleLikeClick = () => {
  setLike(!like);
  };
  
const likeStyle = like ? { color: '#e74c3c' , cursor:'pointer' } : {cursor: 'pointer'};



return (
  <div className={styles.card}>
    <img className={styles.image} src={props.poster} alt={props.title} />
    <div className={styles.textContainer}>
      <span className={styles.name}>{props.title}</span>
      <p className={styles.description}>{props.overview}</p>
      <span className={styles.vote}>{stars} ({props.voteCount})</span>
      <div className={styles.personalStars}>{personalStars}</div>
      <div className={styles.icon}>
      <FontAwesomeIcon icon={faCamera} className="watch" style={watchStyle} onClick={handleWatchClick} />
      <span>({watchCount})</span>
      </div>
      <FontAwesomeIcon icon={faHeart} className ="like" style={likeStyle} onClick={handleLikeClick} />
    </div>
  </div>
);
}

export default Movie;