import React from 'react';
import './NumberInputs.css';

const NumberInputs = () => {
    return(
        <div className="number-input-controls">
            <label>Axis Size From (M)</label>
            <input type="number" min="0" />
            <label>To</label>
            <input type="number" min="0" />
        </div>
    );
}

export default NumberInputs;