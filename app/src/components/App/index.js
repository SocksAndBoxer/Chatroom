import React from 'react';

import Settings from 'src/components/Settings';
import Messages from 'src/components/Messages';
import Form from 'src/components/Form';

class App extends React.Component {
  state = {
    user1: 'Bernard',
    user2: 'René',
    value1: '',
    value2: '',
    messages: [],
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

  render() {
    const {
      user1,
      value1,
      value2,
      messages,
    } = this.state;
    return (
      <div id="app">
        <div id="chatbox-1">
          <Settings />
          <Messages user1={user1} messages={messages} />
          <Form
            handleChange={this.handleChange}
            id="value1"
            value={value1}
            handleSubmit={this.handleSubmit}
          />
        </div>
        <div id="chatbox-2">
          <Settings />
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
