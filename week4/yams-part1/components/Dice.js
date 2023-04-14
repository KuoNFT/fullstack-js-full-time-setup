import styles from '../styles/Dice.module.css';

function Dice(props) {
  const imageName = `${props.number}.png`; // construire le nom de l'image à partir du nombre reçu en props
  const imagePath = `/${imageName}`; // construire le chemin de l'image
  return (
    <div className={styles.dice}>
      <img className={styles.image} src={imagePath} alt={props.number} />
    </div>
  );
}

export default Dice;