import React from 'react';
import './RadioButtons.css'

const RadioButtons = () => {
    return (
        <React.Fragment>
            <div className="first-radio-div">
                <label className="radio-title-label">Bloomberg Linker:</label>  
                <input type="radio" value="DES" name="bloomberg_linker"/>DES  
                <input type="radio" value="ALLQ" name="bloomberg_linker"/>ALLQ
                <input type="radio" value="YASQ" name="bloomberg_linker"/>YASQ
            </div>
            <div className="second-radio-div">
                <label className="radio-title-label">Axis Way:</label>  
                <input type="radio" value="BOTH" name="axis_way"/>BOTH  
                <input type="radio" value="BUY" name="axis_way"/>BUY
                <input type="radio" value="SELL" name="axis_way"/>SELL
            </div>
            <div className="third-radio-div">
                <label className="radio-title-label">Show:</label>  
                <input type="radio" value="ALL" name="show"/>ALL  
                <input type="radio" value="AXES" name="show"/>AXES
            </div>
        </React.Fragment>
    );
}

export default RadioButtons;