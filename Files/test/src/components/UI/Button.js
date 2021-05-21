import React from 'react';
import ExportButtonIcon from '../UI/ExportButtonIcon';
import './Button.css';

const Button = () => {
    return (
        <button className="button-styling">
            <span>
                <ExportButtonIcon />
            </span>
        </button>
    );
}

export default Button;