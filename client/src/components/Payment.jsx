import React, { useState } from 'react';
import { useStripe } from '@stripe/react-stripe-js';
import { Button } from '@mui/material';
import axios from 'axios';
import './Payment.css'; // Assuming the CSS file is named Payment.css

const Payment = ({ calculateTotal }) => {
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe) {
      return; // Stripe.js has not loaded yet
    }

    setLoading(true);
    const totalAmount = calculateTotal(); // Get total amount dynamically

    try {
      // Call backend to create a Checkout session
      const { data } = await axios.post('http://localhost:3000/create-checkout-session', { totalCost: totalAmount });
      const { sessionId } = data;

      if (!sessionId) {
        throw new Error('Failed to create Stripe Checkout session');
      }

      // Redirect to Stripe Checkout
      const { error } = await stripe.redirectToCheckout({ sessionId });

      if (error) {
        alert(`Stripe Checkout error: ${error.message}`);
      }
    } catch (error) {
      alert(`Error during checkout: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="payment-form" id="payment-form">
      <h2 className="payment-heading">Payment Information</h2>
      <Button 
        type="submit" 
        className="submit-button" 
        id="submit-button"
        disabled={loading || !stripe}>
        {loading ? 'Redirecting...' : 'Submit Order'}
      </Button>
    </form>
  );
};

export default Payment;
