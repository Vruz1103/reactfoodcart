import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';
import styles from '../assets/css/OrderSuccess.module.css';

export default function OrderSuccess({ onOrderComplete }) {
  const [countdown, setCountdown] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    // Trigger confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    // Start countdown
    const timer = setInterval(() => {
      setCountdown((prevCount) => prevCount - 1);
    }, 1000);

    // Redirect after 10 seconds
    const redirect = setTimeout(() => {
      onOrderComplete();
      navigate('/');
    }, 10000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirect);
    };
  }, [navigate, onOrderComplete]);

  const handleManualRedirect = () => {
    onOrderComplete();
    navigate('/');
  };

  return (
    <div className={styles.successContainer}>
      <div className={styles.successContent}>
        <div className={styles.checkmark}>✓</div>
        <h1>Your payment was successful!</h1>
        <p>Thank you! Your order has been placed.</p>
        <p>You will be redirected in {countdown} seconds</p>
        <p>If you are not redirected, <button onClick={handleManualRedirect}>click here</button></p>
      </div>
    </div>
  );
}