import React from 'react';
import PropTypes from 'prop-types';

import AddUser from 'react-icons/lib/md/add-circle';

class Settings extends React.Component {
  state = {
    value: '',
  }

  handleChange = (evt) => {
    this.setState({
      value: evt.target.value,
    });
  }

  render() {
    const {
      toggleHidden,
      hidden,
      user,
      handleSubmit,
    } = this.props;
    const { value } = this.state;
    return (
      <div id="settings">
        <form
          onSubmit={handleSubmit(value, user)}
          id="form"
        >
          <h2>Chatroom</h2>
          <input
            className={hidden ? 'input-user' : 'input-user hidden'}
            value={this.state.value}
            onChange={this.handleChange}
            type="text"
          />
        </form>

        <AddUser
          className={hidden ? 'user-button hidden' : 'user-button'}
          onClick={toggleHidden(user)}
        />

      </div>
    );
  }
}

Settings.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  toggleHidden: PropTypes.func.isRequired,
  user: PropTypes.string.isRequired,
  hidden: PropTypes.bool.isRequired,
};

export default Settings;
