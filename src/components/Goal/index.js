import React, { Component} from 'react';
import { Row, Col } from 'react-materialize';
import './styles.css';

export default class Goal extends Component {
  render() {
    return(
      <div className="goal-wrapper">
        <div className="goal-content">
          <Row>
            <Col s={4}>
              <div className="goal-img">
                <img src="http://www194.lunapic.com/do-not-link-here-use-hosting-instead/15028111535986?8271727767" alt="image" />
              </div>
            </Col>
  	        <Col s={8}>
             <div className="goal-text">
               <h4>Our Goal</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
             </div>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}
