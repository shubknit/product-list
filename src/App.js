import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { FilterProductData } from './components/FilterProductData';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          Product dashboard
        </header>
        <FilterProductData/>
      </div>
    );
  }
}

export default App;
