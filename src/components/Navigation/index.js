import React, { Component } from 'react';
import './styles.css';

export default class Navigation extends Component {
  render() {
    return(
      <div className="navigation">
        <nav>
          <div className="nav-links">
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
          </div>
        </nav>
      </div>
    )
  }
}
