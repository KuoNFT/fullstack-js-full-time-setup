import { useSelector } from 'react-redux'; // Importez useSelector
import styles from '../styles/UserInfos.module.css';

function UserInfos() {
	// Utilisez useSelector pour lire les données du reducer
	const userInfos = useSelector((state) => state.user.value);

	return (
		<div>
			<h4 className={styles.title}>
				My username is in the redux store:
				<span className={styles.userInfos}>
					{userInfos.username /* Affichez le username du store */}
				</span>
			</h4>
			<h4 className={styles.title}>
				My token is in the redux store:
				<span className={styles.userInfos}>
					{userInfos.token /* Affichez le token du store */}
				</span>
			</h4>
		</div>
	);
}

export default UserInfos;

