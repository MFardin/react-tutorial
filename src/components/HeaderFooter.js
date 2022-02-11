import React from "react";
import logo from '../logo.svg';
import '../App.css';

const HomeHeader = () => {
    return (
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Aynaz</h2>
        </div>
    )
}

export const HomeFooter = () => {
    return (
        <p className="App-intro">
          Mamad
        </p>
    )
}

export default HomeHeader