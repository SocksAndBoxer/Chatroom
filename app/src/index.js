import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

import App from 'src/components/App';

document.addEventListener('DOMContentLoaded', () => {
  const rootComponent = (
    <App />
  );
  const node = document.getElementById('root');

  render(rootComponent, node);
});
