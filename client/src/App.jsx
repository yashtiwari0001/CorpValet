import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Navbar from './components/Navbar';
import Setup from './components/Setup';
import Home from './components/Home';
import Company from './components/Company';
import Businesstype from './components/Businesstype';
import Satisfaction from './components/Satisfaction';
import Platform from './components/Platform';
import Overviewing from './components/Overviewing';
import Footer from './components/Footer';
import Price from './components/Price';
import StepperForm from './components/StepperForm';
import Payment from './components/Payment';
import Success from './components/ Success';
import Cancel from './components/Cancel';
import Contact from './components/Contact';


// Initialize Stripe with your public key
const stripePromise = loadStripe('pk_test_51QIG0NGO7ICWsLJTCgBAtw1LYjVSYvyRpaAVCNUZByDcN4u1k7QqEIGcA0OExWUnbhoRwhLetucVFH4jzGeEWL7M00mm87tUC1'); // Replace with your actual public key

const App = () => {
  return (
    <Router>
      <Navbar />

      {/* Wrap in Elements to provide Stripe context */}
      <Elements stripe={stripePromise}>
        <Routes>
          {/* Home and Company components displayed together on the root route */}
          <Route
            path="/"
            element={
              <>
                <Home />
                <Company />
                <Satisfaction />
                <Platform />
                <Overviewing />
              </>
            }
          />
          {/* Define other routes for specific pages */}
          <Route path="/services/setup" element={<Setup />} />
          <Route path="/services/manage" element={<Setup />} />
          <Route path="/resources/blogs" element={<Setup />} />
          <Route path="/resources/faqs" element={<Setup />} />
          <Route path="/why/about" element={<Setup />} />
          <Route path="/why/reviews" element={<Setup />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/consultation" element={<Setup />} />
          <Route path="/get-started" element={<Setup />} />
          <Route path="/businesstype" element={<Businesstype />} />
          <Route path="/price" element={<Price />} />
          <Route path="/stepperform" element={<StepperForm />} /> {/* The payment flow */}
          <Route path="/payment" element={<Payment/>} /> {/* Updated payment path */}
          <Route path="/success" element={<Success/>} />
         <Route path="/cancel" element={<Cancel/>} />
        
        </Routes>
      </Elements>

      <Footer />
    </Router>
  );
};

export default App;
