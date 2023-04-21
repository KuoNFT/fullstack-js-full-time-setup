import styles from '../styles/Toparticle.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addBookmarkToStore, removeBookmarkFromStore } from '../reducers/bookmarks';

function TopArticle(props) {
  const bookmarks = useSelector((state) => state.bookmarks.value);
  const dispatch = useDispatch();

  const isBookmarked = bookmarks.some((bookmark) => bookmark.url === props.url);

  const handleBookmarkClick = () => {
    if (isBookmarked) {
      dispatch(removeBookmarkFromStore(props.url));
    } else {
      dispatch(
        addBookmarkToStore({
          title: props.title,
          author: props.author,
          urlToImage: props.urlToImage,
          description: props.description,
          url: props.url,
        })
      );
    }
  };

  return (
    <div className={styles.topContainer}>
      <img src={props.urlToImage} className={styles.image} alt={props.title} />
      <div className={styles.topText}>
        <h2 className={styles.topTitle}>{props.title}</h2>
        <FontAwesomeIcon
          icon={faBookmark}
          className={`${styles.bookmarkIcon} ${isBookmarked ? styles.bookmarked : ''}`}
          onClick={handleBookmarkClick}
        />
        <h4>{props.author}</h4>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default TopArticle;
