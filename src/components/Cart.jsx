import styles from "../assets/css/Cart.module.css";
import { ShoppingCart } from 'lucide-react';

export default function Cart({ totalItems, onClick }) {
  return (
    <button className={styles.cartButton} onClick={onClick}>
      <ShoppingCart className={styles.icon} />
      Your Cart <span className={styles.badge}>{totalItems}</span>
    </button>
  );
}