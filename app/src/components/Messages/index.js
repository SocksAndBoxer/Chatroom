import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ user1, messages }) => (
  <div id="messages">
    {messages.map(message => (
      <div key={message.value} className="message" id={message.user === user1 ? 'user1' : 'user2'}>
        <p className="user">{message.user}</p>
        <p className="message">{message.value}</p>
      </div>
    ))
  }
  </div>
);

Message.propTypes = {
  user1: PropTypes.string.isRequired,
  messages: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default Message;
