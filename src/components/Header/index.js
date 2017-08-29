import React, { Component } from 'react';
import { Section, Row, Col, Icon } from 'react-materialize';
import './styles.css';

const Header = () => (
  <div className="header-wrapper z-depth-2">
    <div className="header">
      <img id="logo" src="https://image.ibb.co/bHn2j5/viking.png" />
      <h1>Scandinavian Coders</h1>
    </div>
  </div>
)

export default Header;
