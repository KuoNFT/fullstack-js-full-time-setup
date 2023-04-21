import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';
import Country from './Country'

function Home() {
  const [countries, setCountries] = useState([]);



  useEffect(() => {
    const fetchFlags = async () => {
      const response = await fetch('https://countriesnow.space/api/v0.1/countries/flag/images');
      const data = await response.json();
      setCountries(data.data);
    };

    fetchFlags();
  }, []);

  return (
    <div className={styles.globalContainer}>
      <h1 className={styles.title}>My World Tour</h1>
      <span className={styles.counter}>Number of countries: {countries.length}</span>
      <div className={styles.countriesContainer}>
        {countries.map((country) => (
          <Country
            key={country.name}
            name={country.name}
            flag={country.flag}
            iso3={country.iso3}
          />
        ))}
      </div>
    </div>
  );
}


export default Home;