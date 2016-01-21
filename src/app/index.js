import React from 'react';
import {render} from 'react-dom';
import styles from './index.css';
import polyfills from './polyfills/es2015';
import App from './components/App';
import { Router, Route, IndexRoute, IndexRedirect, Link } from 'react-router';

render(
  <Router>
    <Route path="/" component={App} />
  </Router>,
  document.getElementById('app')
);
