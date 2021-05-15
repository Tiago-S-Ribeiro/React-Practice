import React from 'react';
import './Dropdowns.css';

const Dropdowns = () => {
    return (
        <React.Fragment>
                <div className="dropdowns-controls">
                    <label>Country:</label>
                    <select>
                        <option value='X'>X</option>
                        <option value='Y'>Y</option>
                        <option value='Z'>Z</option>
                    </select>
                </div>
                <div className="dropdowns-controls">
                    <label>Category:</label>
                    <select>
                        <option value='X'>CCCCC</option>
                        <option value='Y'>AAAAA</option>
                        <option value='Z'>TTTTT</option>
                    </select>
                </div>
                <div className="dropdowns-controls">
                    <label>Desk:</label>
                    <select>
                        <option value='X'>DDDDD</option>
                        <option value='Y'>EEEEE</option>
                        <option value='Z'>SSSSS</option>
                    </select>
                </div>
        </React.Fragment>
    );
}

export default Dropdowns;