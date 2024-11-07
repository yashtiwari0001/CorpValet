import React, { createContext, useState, useEffect } from 'react';

const PricingContext = createContext();

const PricingProvider = ({ children }) => {
    const [statePrices, setStatePrices] = useState({});

    // Function to generate random prices for each state
    const generateRandomPrices = () => {
        const states = [
            "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware",
            "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky",
            "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri",
            "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina",
            "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
            "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
            "Wisconsin", "Wyoming"
        ];

        const prices = {};
        states.forEach(state => {
            prices[state] = Math.floor(Math.random() * (300 - 50 + 1)) + 50; // Random price between $50 and $300
        });
        setStatePrices(prices);
    };

    useEffect(() => {
        generateRandomPrices();
    }, []);

    return (
        <PricingContext.Provider value={statePrices}>
            {children}
        </PricingContext.Provider>
    );
};

export { PricingProvider, PricingContext };
