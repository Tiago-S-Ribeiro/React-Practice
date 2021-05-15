import React from 'react';
import './Datepickers.css'

const Datepickers = () => {
    return (
        <div className="date-controls">
            <label>Maturity From </label>
            <input type="date" min="2020-01-01" />
            <label>To</label>
            <input type="date" min="2020-01-01" />
        </div>
    );
}

export default Datepickers;