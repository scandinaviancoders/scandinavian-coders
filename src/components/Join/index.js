import React from 'react';
import {Row,  Col} from 'react-materialize';
import './styles.css';

const Join = () => (
  <div className="contact">
    <h4>Join Us</h4>
    <Row>
      <Col className='join-media'>
        <img id="join-logo" src="https://cdn.worldvectorlogo.com/logos/slack-1.svg" alt="Slack Logo"/>
        <h5>Slack</h5>
        <hr />
        <p>To join the Slack group, send us an email!</p>
        <div className="join-btn">
          <p><a href="mailto:scandinaviancoders@gmail.com">Message</a></p>
        </div>
      </Col>
    	<Col className='join-media'>
        <img id="join-logo" src="https://www.sketchappsources.com/resources/source-image/twitterlogo_1x.png" alt="Twitter Logo" />
        <h5>Twitter</h5>
        <hr />
        <p>Follow Us On Twitter</p>
        <div className="join-btn">
          <p><a href="http://www.twitter.com">Follow</a></p>
        </div>
      </Col>
    	<Col className='join-media'>
        <img id="join-logo-github" src="https://image.flaticon.com/icons/png/512/25/25231.png" alt="GitHub Logo"/>
        <h5>GitHub</h5>
        <hr />
        <p>Join Our GitHub Organization</p>
        <div className="join-btn">
          <p><a href="https://github.com/scandinaviancoders">Join</a></p>
        </div>
      </Col>
    </Row>
  </div>
)

export default Join;
