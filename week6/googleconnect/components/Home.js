import { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import styles from '../styles/Home.module.css';

function Home() {
  const [user, setUser] = useState(null);

  const handleSuccess = (response) => {
    const decodedToken = jwtDecode(response.credential);
    const { name, email } = decodedToken;
    setUser({ name, email });
  };

  const handleError = (error) => {
    console.error('Erreur lors de la connexion Google :', error);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {user ? (
          <>
            <h1>Bienvenue, {user.name}</h1>
            <h2>{user.email}</h2>
          </>
        ) : (
          <>
            <h1>Bienvenue</h1>
            <h2>Connectez-vous à votre compte Google pour continuer</h2>
            <div className={styles.divider}></div>
            <GoogleLogin
              clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
              onSuccess={handleSuccess}
              onFailure={handleError}
              buttonText="Se connecter avec Google"
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
