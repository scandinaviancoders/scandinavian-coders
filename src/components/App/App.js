import React, { Component } from 'react';
import Navigation from '../Navbar';
import Header from '../Header';
import About from '../About';
import Goal from '../Goal';
import Join from '../Join';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="header-content">
          <Navigation />
          <Header />
        </div>
        <About />
        <Goal />
        <Join />
      </div>
    );
  }
}

export default App;
