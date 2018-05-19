import React from 'react';

import Settings from 'src/components/Settings';
import Messages from 'src/components/Messages';
import Form from 'src/components/Form';

class App extends React.Component {
  state = {
    user1: '',
    user2: '',
    value1: '',
    value2: '',
    messages: [],
    hidden1: false,
    hidden2: false,
  };

  // state = {
  //   value1: '',
  //   value2: '',
  // };

  handleChange = (evt) => {
    evt.preventDefault();
    this.setState({ [evt.target.id]: evt.target.value });
  }

  handleSubmit = (value, id) => (evt) => {
    evt.preventDefault();
    const { user1, user2 } = this.state;
    if ((id === 'value1' && this.state.user1 !== '')
    ||
    (id === 'value2' && this.state.user2 !== '')) {
      if (id === 'value1') {
        this.setState({
          messages: [
            ...this.state.messages,
            {
              user: user1,
              value,
            },
          ],
          value1: '',
        });
      }
      else {
        this.setState({
          messages: [
            ...this.state.messages,
            {
              user: user2,
              value,
            },
          ],
          value2: '',
        });
      }
    }
    else {
      window.alert('Veuillez entrer un nom d\'utilisateur');
    }
  }

  handleSettingsSubmit = (value, user) => (evt) => {
    evt.preventDefault();
    const { hidden1, hidden2 } = this.state;
    if (value !== '') {
      if (user === 'user1') {
        this.setState({
          user1: value,
          hidden1: !hidden1,
        });
      }
      else {
        this.setState({
          user2: value,
          hidden2: !hidden2,
        });
      }
    }
    else {
      window.alert('Vous devez rentrer un nom d\'utilisateur');
    }
  }

  toggleHidden = user => () => {
    const { hidden1, hidden2 } = this.state;
    if (user === 'user1') {
      this.setState({
        hidden1: !hidden1,
      });
    }
    else {
      this.setState({
        hidden2: !hidden2,
      });
    }
  }

  render() {
    const {
      user1,
      value1,
      value2,
      messages,
      hidden1,
      hidden2,
    } = this.state;
    return (
      <div id="app">
        <div id="chatbox-1">
          <Settings toggleHidden={this.toggleHidden} hidden={hidden1} user="user1" handleSubmit={this.handleSettingsSubmit} />
          <Messages user1={user1} messages={messages} />
          <Form
            handleChange={this.handleChange}
            id="value1"
            value={value1}
            handleSubmit={this.handleSubmit}
          />
        </div>
        <div id="chatbox-2">
          <Settings toggleHidden={this.toggleHidden} hidden={hidden2} user="user2" handleSubmit={this.handleSettingsSubmit} />
          <Messages user1={user1} messages={messages} />
          <Form
            handleChange={this.handleChange}
            id="value2"
            value={value2}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}


export default App;
