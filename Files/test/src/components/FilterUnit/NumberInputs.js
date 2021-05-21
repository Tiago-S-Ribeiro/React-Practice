import React from 'react';
import './NumberInputs.css';

const NumberInputs = () => {
    return(
        <div className="number-input-controls">
            <label id="axis-size-from">Axis Size:</label>
            <input type="number" min="0" placeholder="From (M)"/>
            <svg className="x" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="bevel"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
            <input type="number" min="0" placeholder="To (M)"/>
        </div>
    );
}

export default NumberInputs;