import { useState } from 'react';
import { useDispatch } from 'react-redux'; 
import { addUserInfosToStore } from '../reducers/user'; 
import styles from '../styles/Home.module.css';
import UserInfos from './UserInfos';

function Home() {
	const [usernameInput, setUsernameInput] = useState('');
	const dispatch = useDispatch(); 

	const handleClick = () => {
		fetch('http://localhost:3000/users/signup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ username: usernameInput }),
		})
			.then(response => response.json())
			.then(userData => {
				
				dispatch(addUserInfosToStore(userData.newUserInfos));

				setUsernameInput('');
			});
	};

	return (
		<div className={styles.globalContainer}>
			<h1>Tokenify</h1>
			<div className={styles.inputCard}>
				<input
					placeholder='Username'
					onChange={e => setUsernameInput(e.target.value)}
					value={usernameInput}
					className={styles.input}
				/>
				<button
					onClick={() => handleClick()}
					className={styles.button}
				>
					Register
				</button>
			</div>
			<UserInfos />
		</div>
	);
}

export default Home;
