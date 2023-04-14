import styles from '../styles/Triangle.module.css'


function Triangle({ color, direction, className }) {
    const borderLeftColor = direction === "left" ? color : "transparent";
    const borderRightColor = direction === "right" ? color : "transparent";

    return (
        <div
            className={`${styles.triangle} ${className}`}
            
        ></div>
    );
}

export default Triangle