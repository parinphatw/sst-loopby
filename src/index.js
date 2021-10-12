import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Amplify from 'aws-amplify';
import awsExports from './aws-exports';
import App from './App';

Amplify.configure(awsExports);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
