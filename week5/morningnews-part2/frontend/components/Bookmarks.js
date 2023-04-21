import Head from 'next/head';
import styles from '../styles/Bookmarks.module.css';
import { useSelector, useDispatch } from 'react-redux';
import Article from './Article';
import { removeBookmarkFromStore } from '../reducers/bookmarks';

function Bookmarks() {
  const bookmarks = useSelector((state) => state.bookmarks.value);
  const dispatch = useDispatch()

  const removeBookmark = (url) => {
    dispatch(removeBookmarkFromStore(url))
  }

  return (
    <div>
      <Head>
        <title>Morning News - Bookmarks</title>
      </Head>
      <div className={styles.container}>
        <h2>Bookmarks</h2>
        {bookmarks.length > 0 ? (
          bookmarks.map((bookmark) => (
            <Article
              key={bookmark.url}
              title={bookmark.title}
              author={bookmark.author}
              urlToImage={bookmark.urlToImage}
              description={bookmark.description}
              url={bookmark.url}
              isBookmarked={true}
            />
          ))
        ) : (
          <p>No bookmark</p>
        )}
      </div>
    </div>
  );
}

export default Bookmarks;
