import { useEffect, useState } from 'react';
import styles from '../styles/Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import Moment from 'react-moment';
import { Modal } from 'antd';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, logoutUser} from '../reducers/user';

function Header() {
  const [date, setDate] = useState('2050-11-22T23:59:59');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    setDate(new Date());
  }, []);

  const showModal = () => {
    setIsModalVisible(!isModalVisible);
  };



  const [signUpUsername, setSignUpUsername] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signInUsername, setSignInUsername] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSignUp() {
    const response = await fetch("http://localhost:3000/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: signUpUsername,
        password: signUpPassword,
      }),
    });

    const data = await response.json();

    if (data.result) {
      dispatch(setUser({ isConnected: true, username: signUpUsername }));
      setIsModalVisible(false);
    } else {
	  setErrorMessage('Échec de l\'inscription, veuillez réessayer.');
    }
  }

  async function handleSignIn() {
    const response = await fetch("http://localhost:3000/users/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: signInUsername,
        password: signInPassword,
      }),
    });

    const data = await response.json();

    if (data.result) {
      dispatch(setUser({ isConnected: true, username: signInUsername }));
      setIsModalVisible(false);
    } else {
	  setErrorMessage('Échec de la connexion, veuillez vérifier vos identifiants.');
    }
  }
  const handleLogout = () => {
    dispatch(logoutUser());

  };
  

  const modalContent = (
    <div className={styles.registerContainer}>
<div className={styles.registerSection}>
      <p>Sign-up</p>
      <input
        type="text"
        placeholder="Username"
		id="signUpUsername"
        value={signUpUsername}
        onChange={(e) => setSignUpUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
		id="signUpPassword"
        value={signUpPassword}
        onChange={(e) => setSignUpPassword(e.target.value)}
      />
      <button id='register'onClick={handleSignUp}>Register</button>
    </div>
    <div className={styles.registerSection}>
      <p>Sign-in</p>
      <input
        type="text"
        placeholder="Username"
		id="signInUsername"
        value={signInUsername}
        onChange={(e) => setSignInUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
		id="signInPassword"
        value={signInPassword}
        onChange={(e) => setSignInPassword(e.target.value)}
      />
      <button id='connection'onClick={handleSignIn}>Connect</button>
    </div>
	<div className={styles.registerContainer}>
    {errorMessage && <p className={styles.error}>{errorMessage}</p>}
  </div>
    </div>
  );

  let userSection;
  if (isModalVisible) {
    userSection = (
      <FontAwesomeIcon
        icon={faXmark}
        onClick={() => showModal()}
        className={styles.userSection}
      />
    );
  } else if (user.isConnected) {
    userSection = (
      <div className={styles.loggedIn}>
        <span>Welcome {user.username} /</span>
        <button onClick={handleLogout} className={styles.logoutButton}>
          Logout
        </button>
      </div>
    );
  } else {
    userSection = (
      <FontAwesomeIcon
        icon={faUser}
        onClick={() => showModal()}
        className={styles.userSection}
      />
    );
  }

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Moment className={styles.date} date={date} format="MMM Do YYYY" />
        <h1 className={styles.title}>Morning News</h1>
        {userSection}
      </div>

      <div className={styles.linkContainer}>
        <Link href="/">
          <span className={styles.link}>Articles</span>
        </Link>
        <Link href="/bookmarks">
          <span className={styles.link}>Bookmarks</span>
        </Link>
      </div>

      {isModalVisible && (
        <div id="react-modals">
          <Modal
            getContainer="#react-modals"
            className={styles.modal}
            visible={isModalVisible}
            closable={false}
            footer={null}
          > { modalContent}
		  </Modal>
		  </div>
		  )}
		  </header>
		  );
		  }
		  
		  export default Header;