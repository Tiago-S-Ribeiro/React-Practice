import React from 'react';
import './TextInputs.css'

const TextInputs = () => {
    return (
        <React.Fragment>
            <div className="input-controls">
                <label htmlFor="isin">Isin:</label>
                <input id="isin" type="text"/>
            </div>
            <div className="input-controls">
                <label htmlFor="ticker">Ticker:</label>
                <input id="ticker" type="text"/>
            </div>
            <div className="input-controls">
                <label htmlFor="issuer">Issuer:</label>
                <input id="issuer" type="text"/>
            </div>
        </React.Fragment>
    );
}

export default TextInputs;