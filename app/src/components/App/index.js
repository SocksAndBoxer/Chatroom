import React from 'react';

import Settings from 'src/components/Settings';
import Messages from 'src/components/Messages';
import Form from 'src/components/Form';

class App extends React.Component {
  state = {
  };

  render() {
    return (
      <div id="app">
        <div id="chatbox-1">
          <Settings />
          <Messages />
          <Form />
        </div>
        <div id="chatbox-2">
          <Settings />
          <Messages />
          <Form />
        </div>
      </div>
    );
  }
}


export default App;
