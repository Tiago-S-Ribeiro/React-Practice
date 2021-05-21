import React from 'react';
import TextInputs from './TextInputs';
import RadioButtons from './RadioButtons';
import Datepickers from './Datepickers';
import Dropdowns from './Dropdowns';
import NumberInputs from './NumberInputs';
import Button from '../UI/Button';
import './FilterForm.css'

const FilterForm = () => {
    return (
        <div className="wrapper">
            <div className="left-block">
                <TextInputs/>
                <RadioButtons/>
            </div>
            <div className="right-block">
                <Dropdowns/>
                <Datepickers/>
                <NumberInputs/>
            </div>
            <div className="export-block">
                <Button />
            </div>
        </div>
    );
}

export default FilterForm;