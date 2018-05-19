import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ user, messages }) => (
  <div id="messages">
    {messages.map(message => (
      <div key={message} className="message">
        <p className="user">{user}</p>
        <p className="message">{message}</p>
      </div>
    ))
  }
  </div>
);

Message.propTypes = {
  user: PropTypes.string.isRequired,
  messages: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default Message;
