// Cancel.js
import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Cancel = () => {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate('/'); // Redirect back to home or any other page
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Payment Canceled</h1>
      <p>Your payment was not completed. You can try again if you wish.</p>
      <Button variant="contained" color="primary" onClick={handleReturn}>
        Return to Home
      </Button>
    </div>
  );
};

export default Cancel;
