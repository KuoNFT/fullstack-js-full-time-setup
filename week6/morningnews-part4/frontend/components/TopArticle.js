import { useDispatch, useSelector } from 'react-redux';
import { addBookmark, removeBookmark } from '../reducers/bookmarks';
import styles from '../styles/TopArticle.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';



function TopArticle(props) {
	const user = useSelector((state) => state.user.value);
	const dispatch = useDispatch();

	const canBookmark = async () => {
		if (!user.token) return false;
		const response = await fetch(`/users/canBookmark/${user.token}`);
		const result = await response.json();
		return result.canBookmark;
	  };

	const handleBookmarkClick = async () => {
		if(!(await canBookmark())) return
		if (props.isBookmarked) {
			dispatch(removeBookmark(props));
		} else {
			dispatch(addBookmark(props));
		}
	}

	let iconStyle = {};
	if (props.isBookmarked) {
		iconStyle = { 'color': '#E9BE59' };
	}

	return (
		<div className={styles.topContainer}>
			<img src={props.urlToImage} className={styles.image} alt={props.title} />
			<div className={styles.topText}>
				<h2 className={styles.topTitle}>{props.title}</h2>
				<FontAwesomeIcon icon={faBookmark} onClick={() => handleBookmarkClick()} style={iconStyle} className={styles.bookmarkIcon} />
				<h4>{props.author}</h4>
				<p>{props.description}</p>
			</div>
		</div>
	);
}

export default TopArticle;
