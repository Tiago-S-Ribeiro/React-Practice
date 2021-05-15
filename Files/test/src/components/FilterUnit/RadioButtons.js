import React from 'react';
import './RadioButtons.css'

const RadioButtons = () => {
    return (
        <React.Fragment>
            <div>
                <label htmlFor="bloomberg">Bloomberg Linker:</label>
                <div id="bloomberg" className="radio-controls">
                    <input type="radio" id="DES" name="bloomberg_linker" value="DES" />
                    <label htmlFor="DES">DES</label>
                    <input type="radio" id="ALLQ" name="bloomberg_linker" value="ALLQ" />
                    <label htmlFor="ALLQ">ALLQ</label>
                    <input type="radio" id="YASQ" name="bloomberg_linker" value="YASQ" />
                    <label htmlFor="other">YASQ</label>
                </div>
            </div>
            <div>
                <label htmlFor="axis">Axis Way:</label>
                <div id="axis" className="radio-controls">
                    <input type="radio" id="BOTH" name="axis_way" value="BOTH" />
                    <label htmlFor="BOTH">Both</label>
                    <input type="radio" id="BUY" name="axis_way" value="BUY" />
                    <label htmlFor="BUY">Buy</label>
                    <input type="radio" id="SELL" name="axis_way" value="SELL" />
                    <label htmlFor="SELL">Sell</label>
                </div>
            </div>
            <div>
                <label htmlFor="show">Axis Way:</label>
                <div id="show" className="radio-controls">
                    <input type="radio" id="ALL" name="show_all_axes" value="ALL" />
                    <label htmlFor="ALL">All</label>
                    <input type="radio" id="AXES" name="show_all_axes" value="AXES" />
                    <label htmlFor="AXES">Axes</label>
                </div>
            </div>
        </React.Fragment>
    );
}

export default RadioButtons;