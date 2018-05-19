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
    messages1: [],
    messages2: [],
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
    if (id === 'value1') {
      this.setState({
        messages1: [...this.state.messages1, value],
        value1: '',
      });
    }
    else {
      this.setState({
        messages2: [...this.state.messages2, value],
        value2: '',
      });
    }
  }

  render() {
    const {
      user1,
      user2,
      value1,
      value2,
      messages1,
      messages2,
    } = this.state;
    return (
      <div id="app">
        <div id="chatbox-1">
          <Settings />
          <Messages user={user1} messages={messages1} />
          <Form
            handleChange={this.handleChange}
            id="value1"
            value={value1}
            handleSubmit={this.handleSubmit}
          />
        </div>
        <div id="chatbox-2">
          <Settings />
          <Messages user={user2} messages={messages2} />
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
