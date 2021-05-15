import React from 'react';
import './TextInputs.css'

const TextInputs = () => {
    return (
        <React.Fragment>
            <div className="input-controls">
                <label className="label-alignment" htmlFor="isin">Isin:</label>
                <input id="isin" type="text"/>
            </div>
            <div className="input-controls">
                <label className="label-alignment" htmlFor="ticker">Ticker:</label>
                <input id="ticker" type="text"/>
            </div>
            <div className="input-controls">
                <label className="label-alignment" htmlFor="issuer">Issuer:</label>
                <input id="issuer" type="text"/>
            </div>
        </React.Fragment>
    );
}

export default TextInputs;