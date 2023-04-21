import styles from '../styles/Toparticle.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addBookmarkToStore, removeBookmarkFromStore } from '../reducers/bookmarks';

function TopArticle(props) {
  const dispatch = useDispatch();

  const addBookmark = (newBookmark) => {
    dispatch(addBookmarkToStore(newBookmark));
  };

  const bookmarks = useSelector((state) => state.bookmarks.value);
  const isBookmarked = (url) => bookmarks.some((bookmark) => bookmark.url === url);

  const toggleBookmark = () => {
    if (isBookmarked(props.url)) {
      dispatch(removeBookmarkFromStore(props.url));
    } else {
      addBookmark({
        title: props.title,
        author: props.author,
        urlToImage: props.urlToImage,
        description: props.description,
        url: props.url,
      });
    }
  };

  return (
    <div className={styles.topContainer}>
      <img src={props.urlToImage} className={styles.image} alt={props.title} />
      <div className={styles.topText}>
        <h2 className={styles.topTitle}>{props.title}</h2>
        <FontAwesomeIcon
          icon={faBookmark}
          className={styles.bookmarkIcon}
          style={{ color: isBookmarked(props.url) ? '#E9BE59' : '#000000' }}
          onClick={toggleBookmark}
        />
        <h4>{props.author}</h4>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default TopArticle;
