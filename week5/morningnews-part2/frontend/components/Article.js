import Image from 'next/image';
import styles from '../styles/Article.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { addBookmarkToStore, removeBookmarkFromStore } from '../reducers/bookmarks';

function Article({ title, author, urlToImage, description, url, isBookmarked }) {
  const dispatch = useDispatch();

  const toggleBookmark = () => {
    if (isBookmarked) {
      dispatch(removeBookmarkFromStore(url));
    } else {
      dispatch(addBookmarkToStore({ title, author, urlToImage, description, url }));
    }
  };

  return (
    <div className={styles.articles}>
      <div className={styles.articleHeader}>
        <h3>{title}</h3>
        <FontAwesomeIcon
          icon={faBookmark}
          className={styles.bookmarkIcon}
          style={{ color: isBookmarked ? '#E9BE59' : '#000000' }}
          onClick={toggleBookmark}
        />
      </div>
      <h4 style={{ textAlign: 'right' }}>- {author}</h4>
      <div className={styles.divider}></div>
      <Image src={urlToImage} alt={title} width={600} height={314} />
      <p>{description}</p>
    </div>
  );
}

export default Article

