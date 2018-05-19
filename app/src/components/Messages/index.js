import React from 'react';
import PropTypes from 'prop-types';

const Message = () => (
  <div id="messages">
    <div className="message">
      <p className="user">Bertrand</p>
      <p className="message">Messaaage!</p>
    </div>
    <div className="message">
      <p className="user">Billy</p>
      <p className="message">Messaaage!</p>
    </div>
  </div>
);

export default Message;
