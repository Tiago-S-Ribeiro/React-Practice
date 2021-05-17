import React from 'react';
import './Dropdowns.css';

const Dropdowns = () => {
    return (
        <React.Fragment>
                <div className="dropdowns-controls">
                    <label>Country:</label>
                    <select>
                        <option value='all'>Select/Deselect All</option>
                        <option value='ae'>AE (United Arab Emirates)</option>
                        <option value='at'>AT (Austria)</option>
                        <option value='au'>AU (Australia)</option>
                        <option value='be'>BE (Belgium)</option>
                        <option value='ca'>CA (Canada)</option>
                        <option value='ch'>CH (Switzerland)</option>
                        <option value='cn'>CN (China)</option>
                        <option value='cz'>CZ (Czech Republic)</option>
                        <option value='de'>DE (Germany)</option>
                        <option value='dk'>DK (Denmark)</option>
                        <option value='ee'>EE (Estonia)</option>
                        <option value='es'>ES (Spain)</option>
                        <option value='eu'>EU (European Union)</option>
                        <option value='fi'>FI (Finland)</option>
                        <option value='fr'>FR (France)</option>
                        <option value='gb'>GB (United Kingdom)</option>
                        <option value='gg'>GG (Guernsey)</option>
                        <option value='gr'>GR (Greece)</option>
                        <option value='ie'>IE (Ireland)</option>
                        <option value='is'>IS (Iceland)</option>
                        <option value='it'>IT (Italy)</option>
                        <option value='je'>JE (Jersey)</option>
                        <option value='jp'>JP (Japan)</option>
                        <option value='kr'>KR (Korea)</option>
                        <option value='ky'>KI (Cayman Islands)</option>
                        <option value='lu'>LU (Luxembourg)</option>
                        <option value='lv'>LV (Latvia)</option>
                        <option value='mul'>MUL (???)</option>
                        <option value='nl'>NL (Netherlands)</option>
                        <option value='no'>NO (Norway)</option>
                        <option value='nz'>NZ (New Zealand)</option>
                        <option value='pl'>PL (Poland)</option>
                        <option value='pt'>PT (Portugal)</option>
                        <option value='se'>SE (Sweden)</option>
                        <option value='sg'>SG (Singapore)</option>
                        <option value='sk'>SK (Slovakia)</option>
                        <option value='sna'>SNA (???)</option>
                        <option value='us'>US (United States of America)</option>
                    </select>
                </div>
                <div className="dropdowns-controls">
                    <label>Category:</label>
                    <select>
                        <option value='all'>Select/Deselect All</option>
                        <option value='agencies'>Agencies</option>
                        <option value='banks'>Banks</option>
                        <option value='banks-gg'>Banks GG</option>
                        <option value='corp'>Corporates</option>
                        <option value='cov-bonds'>Covered Bonds</option>
                        <option value='insurance'>Insurance</option>
                        <option value='misc'>Miscellanous</option>
                        <option value='prov-regions'>Provinces / Regions</option>
                        <option value='sovereigns'>Sovereigns</option>
                        <option value='supra'>Supranationals</option>
                    </select>
                </div>
                <div className="dropdowns-controls">
                    <label>Desk:</label>
                    <select>
                        <option value='all'>Select/Deselect All</option>
                        <option value='agencies'>AGENCIES</option>
                        <option value='corps'>CORPORATESPAR</option>
                        <option value='covered'>COVERED</option>
                        <option value='emerging'>EMERGING</option>
                        <option value='financials'>FINANCIALS</option>
                        <option value='gov'>GOV</option>
                        <option value='high_yield'>HIGH YIELD</option>
                        <option value='h_p_hk'>MTN_PRIMARY_HK</option>
                    </select>
                </div>
        </React.Fragment>
    );
}

export default Dropdowns;