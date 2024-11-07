import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Businesstype.css';
import statePrices from './statePrices.json'; // Adjust the path as necessary

const Businesstype = () => {
    const navigate = useNavigate(); // Initialize useNavigate
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [price, setPrice] = useState(null); // State to hold the price of the selected state

    // Handle change event for business type
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    // Handle change event for state selection
    const handleStateChange = (event) => {
        const state = event.target.value;
        setSelectedState(state);
        setPrice(statePrices[state]); // Set the price based on the selected state
    };

    // Handle button click to navigate to the Price page
    const handleButtonClick = () => {
        if (selectedOption && selectedState) {
            navigate('/Price', {
                state: {
                    price,
                    selectedState,
                    selectedOption
                }
            });
        } else {
            alert('Please select both a business type and a state.');
        }
    };

    const usStates = Object.keys(statePrices); // Get states from the JSON

    return (
        <>
            <div className="mainbox">
                <div className="box">
                    <h1 className='h1'>Let CorpValet Take the Hassle Out of Starting a Business</h1>
                    <p className='p'>
                        The Business Formation experts at CorpValet can file all the paperwork to help you start a business today. Whether you decide to form an LLC (Limited Liability Company), Corporation, Non-Profit, or simply file a DBA, our business filings experts can file your paperwork quickly and affordably. Plus, all our services are backed by our 100% Satisfaction Guarantee.
                    </p>
                </div>
            </div>

            {/* Dropdown selection for business type and state */}
            <div className="dropdown-section">
                <p className='businesstitle'>Start a Business</p>
                <select id="options" value={selectedOption} onChange={handleSelectChange}>
                    <option value="">Select Business Type</option>
                    <option value="LLC">Form an LLC</option>
                    <option value="Corporation">Form a Corporation</option>
                    <option value="NonProfit">Form a Non-Profit</option>
                    <option value="DBA">File a DBA</option>
                </select>

                <select id="states" value={selectedState} onChange={handleStateChange}>
                    <option value="">Select State</option>
                    {usStates.map((state) => (
                        <option key={state} value={state}>{state}</option>
                    ))}
                </select>

                <button onClick={handleButtonClick} disabled={!selectedOption || !selectedState}>
                    Get Started
                </button>
            </div>
        </>
    );
};

export default Businesstype;
