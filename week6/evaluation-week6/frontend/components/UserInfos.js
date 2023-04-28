import { useSelector } from 'react-redux'; 
import styles from '../styles/UserInfos.module.css';

function UserInfos() {
	
	const userInfos = useSelector((state) => state.user.value);

	return (
		<div>
			<h4 className={styles.title}>
				My username is in the redux store:
				<span className={styles.userInfos}>
					{userInfos.username}
				</span>
			</h4>
			<h4 className={styles.title}>
				My token is in the redux store:
				<span className={styles.userInfos}>
					{userInfos.token }
				</span>
			</h4>
		</div>
	);
}

export default UserInfos;

