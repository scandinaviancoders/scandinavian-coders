import React, { Component } from 'react';
import Navigation from '../Navigation';
import Header from '../Header';
import About from '../About';
import Goal from '../Goal';
import Join from '../Join';
import Footer from '../Footer';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="header-content">
          <div className="over-header-content">
            <Navigation />
            <Header />
          </div>
        </div>
        <About />
        <Goal />
        <Join />
        <Footer />
      </div>
    );
  }
}
