import React, { Component } from 'react';
import { Section, Row, Col, Icon } from 'react-materialize';
import './styles.css';

const Header = () => (
  <div className="header-wrapper z-depth-2">
    <div className="header">
      <img id="logo" src="http://www194.lunapic.com/do-not-link-here-use-hosting-instead/15028111535986?5875394899" />
      <h1>Scandinavian Coders</h1>
    </div>
    <div className="btn-down">
      <Section>
      	<Row className='center'>
      		<Col s={12}>
      			<a href="#about"><Icon large>expand_more</Icon></a>
      		</Col>
      	</Row>
      </Section>
    </div>
  </div>
)

export default Header;
