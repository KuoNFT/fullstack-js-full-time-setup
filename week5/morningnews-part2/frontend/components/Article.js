import Image from 'next/image';
import styles from '../styles/Article.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addBookmarkToStore, removeBookmarkFromStore } from '../reducers/bookmarks';

function Article(props) {
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
    <div className={styles.articles}>
      <div className={styles.articleHeader}>
        <h3>{props.title}</h3>
        <FontAwesomeIcon
          icon={faBookmark}
          className={`${styles.bookmarkIcon} ${isBookmarked ? styles.bookmarked : ''}`}
          onClick={handleBookmarkClick}
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
