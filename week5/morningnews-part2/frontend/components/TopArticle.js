import styles from '../styles/Toparticle.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addBookmarkToStore, removeBookmarkFromStore } from '../reducers/bookmarks';
import Article from './Article';

function TopArticle(props) {
  const dispatch = useDispatch();
  const bookmarks = useSelector((state) => state.bookmarks.value);

  const isBookmarked = bookmarks.some((bookmark) => bookmark.url === props.url);

  return (
    <Article
      title={props.title}
      author={props.author}
      urlToImage={props.urlToImage}
      description={props.description}
      url={props.url}
      isBookmarked={isBookmarked}
    />
  );
}

export default TopArticle;
