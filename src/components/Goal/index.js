import React, { Component} from 'react';
import { Row, Col } from 'react-materialize';
import './styles.css';

const Goal = () => (
  <div className="goal-wrapper">
    <div className="goal-content">
      <Row>
        <Col s={4}>
          <div className="goal-img">
            <img src="https://image.ibb.co/ifjHZ5/028_021_achievement_badge_wreath_award_prize_top_rank_winner_win_cup.png" alt="image" />
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

export default Goal;
