import React from 'react';
import TextInputs from './TextInputs';
import RadioButtons from './RadioButtons';
import Datepickers from './Datepickers';
import Dropdowns from './Dropdowns';
import NumberInputs from './NumberInputs';
import './FilterForm.css'

const FilterForm = () => {
    return (
        <div className="wrapper">
            <div className="div-x">
                <TextInputs/>
                <RadioButtons/>
            </div>
            <div className="div-y">
                <Dropdowns/>
                <Datepickers/>
                <NumberInputs/>
            </div>
        </div>
    );
}

export default FilterForm;