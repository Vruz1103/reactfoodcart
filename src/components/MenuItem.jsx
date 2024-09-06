import styles from "../assets/css/MenuItem.module.css";

export default function MenuItem({ item, quantity, addToCart, removeFromCart }) {
  return (
    <div className={styles.menuItem}>
      <div className={styles.itemInfo}>
        <h3 className={styles.itemName}>{item.name}</h3>
        <p className={styles.itemDescription}>{item.description}</p>
        <p className={styles.itemPrice}>${item.price.toFixed(2)}</p>
      </div>
      <div className={styles.itemControls}>
        {quantity > 0 ? (
          <div className={styles.quantityControl}>
            <button onClick={() => removeFromCart(item.id)}>-</button>
            <span>{quantity}</span>
            <button onClick={() => addToCart(item.id)}>+</button>
          </div>
        ) : (
          <button className={styles.addButton} onClick={() => addToCart(item.id)}>+ Add</button>
        )}
      </div>
    </div>
  );
}