import React from 'react';
import styles from '../assets/css/CartModal.module.css';

export default function CartModal({ isOpen, onClose, cart, menuItems, updateCart, removeFromCart, onOrder }) {
  if (!isOpen) return null;

  const cartItems = Object.entries(cart).map(([id, quantity]) => {
    const item = menuItems.find(item => item.id === parseInt(id));
    return { ...item, quantity };
  });

  const totalAmount = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  function handleQuantityChange(id, newQuantity) {
    if (newQuantity > 0) {
      updateCart(id, newQuantity);
    } else {
      removeFromCart(id);
    }
  }

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2 className={styles.title}>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map(item => (
            <div key={item.id} className={styles.cartItem}>
              <div className={styles.itemInfo}>
                <span className={styles.itemName}>{item.name}</span>
                <span className={styles.itemPrice}>${item.price.toFixed(2)}</span>
              </div>
              <div className={styles.itemControls}>
                <div className={styles.quantityControl}>
                  <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                </div>
                <span className={styles.itemTotal}>${(item.price * item.quantity).toFixed(2)}</span>
                <button className={styles.removeButton} onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))
        )}
        <div className={styles.totalAmount}>
          <strong>Total Amount</strong>
          <span>${totalAmount.toFixed(2)}</span>
        </div>
        <div className={styles.actions}>
          <button onClick={onClose} className={styles.closeButton}>Close</button>
          <button onClick={onOrder} className={styles.orderButton}>Order</button>
        </div>
      </div>
    </div>
  );
}