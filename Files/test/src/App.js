import React from 'react';
import FilterUnit from './components/FilterUnit/FilterUnit';
// import Axis from './components/Axis/Axis';
import logo from './assets/logo.png';
import './App.css';

function App() {
  return (
    <div className="main-app">
      <h2>Abcde Dashboard</h2>
      <img src={logo} alt="this is a logo" width="200rem" height="50rem"></img>
      <FilterUnit></FilterUnit>
    </div>
  );
}

export default App;