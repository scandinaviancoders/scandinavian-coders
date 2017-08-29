import React, { Component } from 'react';
import {Row, Input, Icon} from 'react-materialize';
import './styles.css';

export default class Contact extends Component {
  render() {
    return(
      <Row className="contact-form">
        <h4>Contact Us</h4>
        <img src="https://image.ibb.co/ebWpWk/020_247_mail_email_envelope_love_letter_message_heart_valentine.png" />
        <div className="first-row">
          <Input s={6} label="First Name"><Icon>account_circle</Icon></Input>
		      <Input s={6} label="Last Name"><Icon>account_circle</Icon></Input>
        </div>
        <div className="second-row">
          <Input type="email" label="Email" s={6}><Icon>email</Icon></Input>
          <Input s={6} label="Telephone" validate type='tel'><Icon>phone</Icon></Input>
        </div>
        <div className="third-row">
          <Input type="text" label="Message" s={12}><Icon>message</Icon></Input>
        </div>
        <button type="submit">Send</button>
      </Row>
    )
  }
}
