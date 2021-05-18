import React from 'react';
import './Datepickers.css'

const Datepickers = () => {

    const today = new Date();
    const date = today.getFullYear() +"-"+ parseInt(today.getMonth()+1) +"-"+ today.getDate() ;

    return (
        <div className="date-controls">
            <label id="maturity-from">Maturity From </label>
            <input type="date" min={date} />
            <label id="maturity-to">To </label>
            <input type="date" min="2020-01-01" />
        </div>
    );
}

export default Datepickers;