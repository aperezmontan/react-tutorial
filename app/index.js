import React from 'react';
import ReactDOM from 'react-dom';

import Main from './components/Main.js';
import Home from './components/Home.js';

import routes from './config/routes.js'

ReactDOM.render(
  routes,
  document.getElementById('app')
);