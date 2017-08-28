import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import './styles.css';

class About extends Component {
  render() {
    return(
      <div className="about-wrapper" id="about">
        <div className="about-content">
          <Row>
  	         <Col s={8}>
               <div className="about-text">
                 <h4>Who We Are </h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
               </div>
            </Col>
  	        <Col s={4}>
              <div className="about-img">
                <img src="http://www194.lunapic.com/editor/working/15028111535986?6265650089" alt="image" />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default About;
