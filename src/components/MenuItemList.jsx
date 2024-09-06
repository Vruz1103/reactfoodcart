import styles from "../assets/css/MenuItemList.module.css";
import MenuItem from "./MenuItem";

export default function MenuItemList({ menuItems, cart, addToCart, removeFromCart }) {
  return (
    <div className={styles.menuList}>
      {menuItems.map((item) => (
        <MenuItem
          key={item.id}
          item={item}
          quantity={cart[item.id] || 0}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
    </div>
  );
}