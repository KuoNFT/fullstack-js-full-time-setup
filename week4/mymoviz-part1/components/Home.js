import styles from '../styles/Home.module.css';
import { Button, Popover } from 'antd';
import Movie from './Movie';
import 'antd/dist/antd.css';

function Home() {
  const favMovies = ['Movie 1', 'Movie 2', 'Movie 3', 'Movie 4'];

  const content = (
    <div>
      {favMovies.map((movie, index) => (
        <p key={index}>{movie}</p>
      ))}
    </div>
  );

  const moviesList = [];
  for (let i = 0; i< 10; i++) {
    moviesList.push(<Movie key={i}/>)
  }

  return (
    <div className="home">
    <header className = {styles.header}>
      <div className={styles.logocontainer}>
        <img src="logo.png" alt="Logo" />
        <img className={styles.logo} src="logoletter.png" alt="Letter logo" style={{ height: '100%', objectFit: 'contain' }}/>
      </div>
      <div className={styles.favorites}>
        <Popover className={styles.popover} content={content} title="Liked movies">
          <Button type="primary">♥ 4 movies</Button>
        </Popover>
      </div>
    </header>
    <div className = 'content'>
        <h2>Last releases</h2>
        {moviesList}
    </div>
    
    </div>
  );
}


export default Home;
