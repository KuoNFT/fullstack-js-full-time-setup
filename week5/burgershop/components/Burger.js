import styles from '../styles/Burger.module.css';

function Burger(props) {
  const handleClickSelect = () => {
    props.selectBurger(props.name);
  }

  const handleClickRemove = () => {
    props.removeBurger(props.name);
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.name}>{props.name}</h2>
      <img className={styles.images} src={props.image} />
      <div className={styles.btnContainer}>
        <button className={styles.selectBtn} onClick={handleClickSelect}>Select</button>
        <button className={styles.removeBtn} onClick={handleClickRemove}>Remove all</button>
      </div>
    </div>
  );
}

export default Burger;