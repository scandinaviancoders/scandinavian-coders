import React from 'react';
import { Row, Col } from 'react-materialize';
import './styles.css';

const Goal = () => (
  <div className="goal-wrapper">
    <div className="goal-content">
      <Row>
        <Col s={4}>
          <div className="goal-img">
            <img src="https://image.ibb.co/ifjHZ5/028_021_achievement_badge_wreath_award_prize_top_rank_winner_win_cup.png" alt="Trophy" />
          </div>
        </Col>
        <Col s={8}>
         <div className="goal-text">
            <h4>Our Goal</h4>
            <p>We want to boost the tech industry in Scandinavia by letting developers get in touch with each other. They can learn new technologies, share their knowledge, and make  friends through our Slack group and events.</p>
         </div>
        </Col>
      </Row>
    </div>
  </div>
)

export default Goal;
