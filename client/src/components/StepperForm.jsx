import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Stepper, Step, StepLabel, Button } from '@mui/material'; // Button imported here
import './StepperForm.css';
import OrderDetails from './OrderDetails';
import Payment from './Payment';

const StepperForm = () => {
  const { state } = useLocation();
  const { price, selectedState, plan, stateFilingFee, shippingAndHandling, convenienceFee, planPrice } = state || {};

  const steps = ['Order Details', 'Payment', 'Confirmation'];
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    email: '', firstName: '', lastName: '', phone: '',
    companyName: '', alternativeName: '', category: '',
    description: '', country: 'United States', address1: '',
    address2: '', city: '', state: '', zip: '', cardNumber: '',
    expDate: '', cvv: '', plan, stateFilingFee, shippingAndHandling, convenienceFee,
    registeredAgent: 'Option B', annualReport: 'Do not Subscribe', // Default values
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  // Calculate total cost based on selected options (A or Subscribe)
  const calculateTotal = () => {
    let additionalCost = 0;

    if (formData.registeredAgent === 'Option A') {
      additionalCost += 149; // Add $149 if Option A is selected
    }
    if (formData.annualReport === 'Subscribe') {
      additionalCost += 389; // Add $389 if Subscribe is selected
    }

    return price + additionalCost;
  };

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0: return <OrderDetails formData={formData} handleChange={handleChange} />;
      case 1: return <Payment formData={formData} calculateTotal={calculateTotal} />;
      case 2: return <Confirmation formData={formData} />;  // Ensure Confirmation gets the form data
      default: return 'Unknown step';
    }
  };

  return (
    <div className="stepper-form-container">
      <div className="stepper-and-form">
        <div className="stepper-container">
          <Stepper activeStep={activeStep} className="stepper">
            {steps.map((label) => (
              <Step key={label}><StepLabel>{label}</StepLabel></Step>
            ))}
          </Stepper>
        </div>
        <div className="form-content">
          {getStepContent(activeStep)}
        </div>
      </div>

      {/* Order Summary Side Panel */}
      <div className="order-summary">
        <h3>Order Summary</h3>
        <div className="summary-item">
          <strong>CorpValet {plan}:</strong> ${planPrice}
        </div>
        <div className="summary-item">
          <strong>State Filing Fee:</strong> ${stateFilingFee}
        </div>
        <div className="summary-item">
          <strong>S&H:</strong> ${shippingAndHandling}
        </div>
        <div className="summary-item">
          <strong>3% Convenience Fee:</strong> ${convenienceFee}
        </div>
        <div className="summary-item total">
          <strong>Total:</strong> ${calculateTotal()}
        </div>
        {activeStep === 0 && (
          <Button className="go-to-payment-btn" onClick={handleNext}>
            Go to Payment
          </Button>
        )}
        {activeStep > 0 && (
          <Button className="go-back-btn" onClick={handleBack}>
            Back
          </Button>
        )}
      </div>
    </div>
  );
};

export default StepperForm;
