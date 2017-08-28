import React, { Component } from 'react';
import {Navbar, NavItem} from 'react-materialize';
import './styles.css';

class Navigation extends Component {
  render() {
    return(
      <div>
        <Navbar center className="navbar">
	        <NavItem href='/'>Home</NavItem>
	        <NavItem href='/'>Contact</NavItem>
        </Navbar>
      </div>
    )
  }
}

export default Navigation;
