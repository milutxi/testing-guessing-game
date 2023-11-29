import React, { useState } from 'react';

const ColorOptions = () => {

    const options = ["ABD123", "3FA12A", "DAF378"];

    const [selectedOption, setSelectedOption] = useState(options[0]);
    
    const handleSelectChange = (newValue) => {
        setSelectedOption(newValue);
    };
    
    return (
        <div data-testid="color-options">
            
            {selectedOption}

            <div>
            <button value={selectedOption} onChange={handleSelectChange}>{options}</button>
            <button value={selectedOption} onChange={handleSelectChange}>{options}</button>
            <button value={selectedOption} onChange={handleSelectChange}>{options}</button>
            </div>
            
        </div>
    )
}

export default ColorOptions