import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Header from "./header";
import MenuItemList from "./MenuItemList";
import CartModal from "./CartModal";
import OrderSuccess from "./OrderSuccess";
import styles from "../assets/css/FoodApp.module.css";

const menuItems = [
  { id: 1, name: 'Sushi', description: 'Finest fish and veggies', price: 22.99 },
  { id: 2, name: 'Schnitzel', description: 'A german specialty!', price: 16.50 },
  { id: 3, name: 'Barbecue Burger', description: 'American, raw, meaty', price: 12.99 },
  { id: 4, name: 'Green Bowl', description: 'Healthy...and green...', price: 18.99 },
];

function FoodAppContent() {
  const [cart, setCart] = useState({});
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate();

  function addToCart(id) {
    setCart((prevCart) => ({
      ...prevCart,
      [id]: (prevCart[id] || 0) + 1
    }));
  }

  function removeFromCart(id) {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[id] > 1) {
        newCart[id]--;
      } else {
        delete newCart[id];
      }
      return newCart;
    });
  }

  function updateCart(id, quantity) {
    setCart((prevCart) => ({
      ...prevCart,
      [id]: quantity
    }));
  }

  function handleOrder() {
    setIsCartOpen(false);
    navigate('/payment/success/23');
  }

  function handleOrderComplete() {
    setCart({}); 
  }

  const totalItems = Object.values(cart).reduce((sum, quantity) => sum + quantity, 0);

  return (
    <div className={styles.foodApp}>
      <Header totalItems={totalItems} onCartClick={() => setIsCartOpen(true)} />
      <Routes>
      <Route path="/" element={
  <MenuItemList
    menuItems={menuItems}
    cart={cart}
    addToCart={addToCart}
    removeFromCart={removeFromCart}
  />
} />
        <Route path="/payment/success/:id" element={
          <OrderSuccess onOrderComplete={handleOrderComplete} />
        } />
      </Routes>
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        menuItems={menuItems}
        updateCart={updateCart}
        removeFromCart={removeFromCart}
        onOrder={handleOrder}
      />
    </div>
  );
}

export default function FoodApp() {
  return (
    <Router>
      <FoodAppContent />
    </Router>
  );
}