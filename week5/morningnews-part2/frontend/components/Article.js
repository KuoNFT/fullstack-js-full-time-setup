import Image from 'next/image';
import styles from '../styles/Article.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { addBookmarkToStore } from '../reducers/bookmarks';
import { useSelector, useDispatch } from 'react-redux';

function Article(props) {
  const dispatch = useDispatch();

  const addBookmark = (newBookmark) => {
    dispatch(addBookmarkToStore(newBookmark));
  };

  const bookmarks = useSelector((state) => state.bookmarks.value);
  const isBookmarked = (url) => bookmarks.some((bookmark) => bookmark.url === url);


  return (
    <div className={styles.articles}>
      <div className={styles.articleHeader}>
        <h3>{props.title}</h3>
        <FontAwesomeIcon
          icon={faBookmark}
          className={styles.bookmarkIcon}
          style={{ color: isBookmarked(props.url) ? '#E9BE59' : '#000000' }}
          onClick={() => addBookmark(props)}
        />
      </div>
      <h4 style={{ textAlign: 'right' }}>- {props.author}</h4>
      <div className={styles.divider}></div>
      <Image src={props.urlToImage} alt={props.title} width={600} height={314} />
      <p>{props.description}</p>
    </div>
  );
}

export default Article;
