// Success.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button'; 
import './Success.css'; // Import CSS file

const Success = () => {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate('/'); // Redirect back to home or any other page
  };

  return (
    <div className="success-container" id="success-page">
      <h1>Payment Successful!</h1>
      <p>Thank you for your purchase. Your payment has been processed successfully.</p>
      <Button className='buts' variant="contained" color="primary" onClick={handleReturn}>
        Return to Home
      </Button>
    </div>
  );
};

export default Success;
