import styles from '../styles/Country.module.css';


function Country(props) {
  return (
    <div className={styles.countryCard}>
      <h6 className={styles.countryName}>{props.name}</h6>
      <img src={props.flag} alt={props.name} className={styles.countryFlag}/>
      <span className={styles.countryIso}>{props.iso3}</span>
    </div>
  );
}


export default Country;
