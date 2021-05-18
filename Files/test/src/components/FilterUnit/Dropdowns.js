import React, { useState } from 'react';
import './Dropdowns.css';
import MultiSelect from "react-multi-select-component";
import countryOptions from './CountryOptions';
import categoryOptions from './CategoryOptions';
import deskOptions from './DeskOptions';

const Dropdowns = () => {

    const [selectedCountry, setSelectedCountry] = useState(countryOptions);
    const [selectedCategory, setSelectedCategory] = useState(categoryOptions);
    const [selectedDesk, setSelectedDesk] = useState(deskOptions);

    return (
        <React.Fragment>
            <div className="dropdowns-controls">
                <label>Country:</label>
                 <MultiSelect 
                    className="multiselect-override" 
                    overrideStrings={{allItemsAreSelected: "All Selected"}} 
                    value={selectedCountry} 
                    onChange={setSelectedCountry} 
                    options={countryOptions} 
                    labelledBy="Select" 
                />
            </div>
            <div className="dropdowns-controls">
                <label>Category:</label>
                 <MultiSelect 
                    className="multiselect-override" 
                    overrideStrings={{allItemsAreSelected: "All Selected"}} 
                    value={selectedCategory} 
                    onChange={setSelectedCategory} 
                    options={categoryOptions} 
                    labelledBy="Select" 
                />
            </div>
            <div className="dropdowns-controls">
                <label>Desk:</label>
                 <MultiSelect 
                    className="multiselect-override" 
                    overrideStrings={{allItemsAreSelected: "All Selected"}} 
                    value={selectedDesk} 
                    onChange={setSelectedDesk} 
                    options={deskOptions} 
                    labelledBy="Select" 
                />
            </div>
        </React.Fragment>
    );
}

export default Dropdowns;