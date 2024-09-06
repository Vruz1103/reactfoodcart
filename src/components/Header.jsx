import styles from "../assets/css/Header.module.css";
import Cart from "./Cart";

export default function Header({ totalItems, onCartClick }) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>React Food App</h1>
        <Cart totalItems={totalItems} onClick={onCartClick} />
      </div>
    </header>
  );
}