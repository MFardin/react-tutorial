import React, { Component } from 'react';

import './App.css';
import HomeHeader, {HomeFooter} from './components/HeaderFooter';
const App = () => {
    return (
      <div className="App">
        <HomeHeader />
        <HomeFooter />
      </div>
    );
}

export default App;
