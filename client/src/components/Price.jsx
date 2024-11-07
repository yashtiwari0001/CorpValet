// Price.jsx
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Price.css';

// A simple check icon component for features included in a package
const TickIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-check-circle"
        viewBox="0 0 16 16"
    >
        <path d="M8 16a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm3.97-9.03a.5.5 0 0 1 .07.7l-4 5a.5.5 0 0 1-.75 0l-2-2.5a.5.5 0 0 1 .76-.64l1.47 1.84 3.47-4.47a.5.5 0 0 1 .55-.12z" />
    </svg>
);

const PricingTable = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Extract values passed from the previous page
    const { selectedState, price: initialPrice, selectedOption } = location.state || {};
    const [selectedColumn, setSelectedColumn] = useState(null);
    const [selectedFeatures, setSelectedFeatures] = useState({
        '13-basic': true,
        '13-deluxe': true,
        '13-complete': true,
        '15-basic': true, // S & H set to true by default for all plans
        '15-deluxe': true,
        '15-complete': true,
    });

    // Table data structure
    const tableData = [
        { content: 'Name Availability Check', basic: "", deluxe: 20, complete: 25 },
        { content: 'Official Filed Articles of Incorporation', basic: 0, deluxe: 10, complete: 15 },
        { content: 'FREE Corporate Compliance Tool: B.I.Z', basic: 0, deluxe: 0, complete: 25 },
        { content: 'Incorporator Resolutions', basic: 5, deluxe: 10, complete: 15 },
        { content: 'FREE Registered Agent Service', basic: 0, deluxe: "", complete: 20 },
        { content: 'OBTAIN Federal Tax ID Number (EIN)', basic: 8, deluxe: 0, complete: 12 },
        { content: 'Prepare S-Corp Election Form 2553', basic: 0, deluxe: 0, complete: 18 },
        { content: 'CUSTOMIZED Corporate Bylaws & Minutes', basic: 5, deluxe: 10, complete: 15 },
        { content: 'CUSTOMIZED Corporate Kit & Seals', basic: 5, deluxe: 10, complete: 15 },
        { content: `${selectedState} Initial Report Filing`, basic: 5, deluxe: 10, complete: 15 },
        { content: 'Business License Research Package', basic: "", deluxe: 10, complete: 15 },
        { content: 'FinCEN BOI Report - New Required Filing', basic: 5, deluxe: 10, complete: 15 },
        { content: 'Annual Report Filing Subscription', basic: 5, deluxe: 10, complete: 15 },
        { content: `${selectedState} Filing Fee`, basic: initialPrice, deluxe: initialPrice, complete: initialPrice },
        { content: 'Print Delivery', basic: 5, deluxe: 10, complete: 15 },
        { content: 'Shipping & Handling', basic: 29, deluxe: 29, complete: 29 },
        { content: '3% Convenience Fee', basic: 5, deluxe: 10, complete: 15 },
    ];

    const basePrices = {
        basic: 79,
        deluxe: 199,
        complete: 249,
    };

    // Handler for column selection (Basic, Deluxe, Complete)
    const handleCheckboxChange = (column) => {
        setSelectedColumn(selectedColumn === column ? null : column);
        setSelectedFeatures({
            '13-basic': true,
            '13-deluxe': true,
            '13-complete': true,
            '15-basic': true,
            '15-deluxe': true,
            '15-complete': true,
        });
    };

    // Toggle individual feature selections
    const handleFeaturePriceSelect = (index, column) => {
        if (index === 13) return;  // Prevent unchecking of Filing Fee
        setSelectedFeatures((prevSelectedFeatures) => ({
            ...prevSelectedFeatures,
            [`${index}-${column}`]: !prevSelectedFeatures[`${index}-${column}`],
        }));
    };

    // Calculate total based on selected features
    const calculateTotal = () => {
        if (!selectedColumn) return 0;

        let total = basePrices[selectedColumn];
        tableData.forEach((row, index) => {
            if (selectedFeatures[`${index}-${selectedColumn}`]) {
                total += row[selectedColumn];
            }
        });

        return total;
    };

    // Navigate to StepperForm with the selected data
    const handleContinue = () => {
        const totalCost = calculateTotal();
        alert(`You have selected the ${selectedColumn} package with a total cost of $${totalCost}.`);

        navigate('/stepperform', {
            state: {
                price: totalCost,
                selectedState,
                selectedOption,
                plan: selectedColumn,
                planPrice: basePrices[selectedColumn],
                stateFilingFee: tableData[13].basic,
                shippingAndHandling: tableData[15].basic,
                convenienceFee: 0.03 * totalCost, // 3% of total cost
            },
        });
    };

    return (
        <>
            <h1 className='heading'>Form Your {selectedState} {selectedOption}</h1>
            <div className="pricing-table">
                <table>
                    <thead>
                        <tr>
                            <th>Content</th>
                            <th>
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={selectedColumn === 'basic'}
                                        onChange={() => handleCheckboxChange('basic')}
                                    />
                                    Basic
                                </label>
                            </th>
                            <th>
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={selectedColumn === 'deluxe'}
                                        onChange={() => handleCheckboxChange('deluxe')}
                                    />
                                    Deluxe
                                </label>
                            </th>
                            <th>
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={selectedColumn === 'complete'}
                                        onChange={() => handleCheckboxChange('complete')}
                                    />
                                    Complete
                                </label>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row, index) => (
                            <tr key={index}>
                                <td>{row.content}</td>
                                <td className={selectedColumn === 'basic' ? 'selected-column' : ''}>
                                    {row.basic > 0 ? (
                                        <label>
                                            <input
                                                type="checkbox"
                                                checked={!!selectedFeatures[`${index}-basic`]}
                                                onChange={() => handleFeaturePriceSelect(index, 'basic')}
                                                disabled={!selectedColumn || selectedColumn !== 'basic'}
                                            />
                                            ${row.basic}
                                        </label>
                                    ) : (
                                        <TickIcon />
                                    )}
                                </td>
                                <td className={selectedColumn === 'deluxe' ? 'selected-column' : ''}>
                                    {row.deluxe > 0 ? (
                                        <label>
                                            <input
                                                type="checkbox"
                                                checked={!!selectedFeatures[`${index}-deluxe`]}
                                                onChange={() => handleFeaturePriceSelect(index, 'deluxe')}
                                                disabled={!selectedColumn || selectedColumn !== 'deluxe'}
                                            />
                                            ${row.deluxe}
                                        </label>
                                    ) : (
                                        <TickIcon />
                                    )}
                                </td>
                                <td className={selectedColumn === 'complete' ? 'selected-column' : ''}>
                                    {row.complete > 0 ? (
                                        <label>
                                            <input
                                                type="checkbox"
                                                checked={!!selectedFeatures[`${index}-complete`]}
                                                onChange={() => handleFeaturePriceSelect(index, 'complete')}
                                                disabled={!selectedColumn || selectedColumn !== 'complete'}
                                            />
                                            ${row.complete}
                                        </label>
                                    ) : (
                                        <TickIcon />
                                    )}
                                </td>
                            </tr>
                        ))}
                        <tr className="total-cost-row">
                            <td>Total Cost</td>
                            <td className={selectedColumn === 'basic' ? 'selected-column' : ''}>
                                {selectedColumn === 'basic' ? (
                                    <>
                                        <span>${calculateTotal()}</span>
                                        <button onClick={handleContinue} disabled={!selectedColumn} className="continue-button">
                                            Continue
                                        </button>
                                    </>
                                ) : ''}
                            </td>
                            <td className={selectedColumn === 'deluxe' ? 'selected-column' : ''}>
                                {selectedColumn === 'deluxe' ? (
                                    <>
                                        <span>${calculateTotal()}</span>
                                        <button onClick={handleContinue} disabled={!selectedColumn} className="continue-button">
                                            Continue
                                        </button>
                                    </>
                                ) : ''}
                            </td>
                            <td className={selectedColumn === 'complete' ? 'selected-column' : ''}>
                                {selectedColumn === 'complete' ? (
                                    <>
                                        <span>${calculateTotal()}</span>
                                        <button onClick={handleContinue} disabled={!selectedColumn} className="continue-button">
                                            Continue
                                        </button>
                                    </>
                                ) : ''}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default PricingTable;
