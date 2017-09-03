import React from 'react';
import { Row, Col } from 'react-materialize';
import './styles.css';

const About = () => (
  <div className="about-wrapper" id="about">
    <div className="about-content">
      <Row>
         <Col s={8}>
           <div className="about-text">
              <h4>Who We Are </h4>
              <p>Scandinavian Coders is a community of highly motivated developers from all over Scandinavia, that embraces the diversity between level of skill, gender and age. We focus on sharing our knowledge with the other developers in the community by working on open source projects at our GitHub organization, organizing tech events, and networking.</p>
           </div>
        </Col>
        <Col s={4}>
          <div className="about-img">
            <img src="https://image.ibb.co/fjUbBk/011_007_collective_group_masses_people_company.png" alt="Community" />
          </div>
        </Col>
      </Row>
    </div>
  </div>
)

export default About;
