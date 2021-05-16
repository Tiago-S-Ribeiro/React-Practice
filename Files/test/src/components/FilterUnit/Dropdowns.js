import React from 'react';
import './Dropdowns.css';

const Dropdowns = () => {
    return (
        <React.Fragment>
                <div className="dropdowns-controls">
                    <label>Country:</label>
                    <select>
                        <option value='X'>Select All</option>
                        <option value='Y'>PT</option>
                        <option value='Z'>ES</option>
                    </select>
                </div>
                <div className="dropdowns-controls">
                    <label>Category:</label>
                    <select>
                        <option value='X'>Cat: 1</option>
                        <option value='Y'>Cat: 2</option>
                        <option value='Z'>Cat: 3</option>
                    </select>
                </div>
                <div className="dropdowns-controls">
                    <label>Desk:</label>
                    <select>
                        <option value='X'>Desk: 1</option>
                        <option value='Y'>Desk: 2</option>
                        <option value='Z'>Desk: 3</option>
                    </select>
                </div>
        </React.Fragment>
    );
}

export default Dropdowns;