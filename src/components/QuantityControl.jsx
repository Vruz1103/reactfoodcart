import styles from "../assets/css/QuantityControl.module.css";

export default function QuantityControl({ quantity, onIncrease, onDecrease }) {
  return (
    <div className={styles.quantityControl}>
      <button className={styles.quantityButton} onClick={onDecrease}>-</button>
      <span className={styles.quantity}>{quantity}</span>
      <button className={styles.quantityButton} onClick={onIncrease}>+</button>
    </div>
  );
}