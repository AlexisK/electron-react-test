import './app.less';
import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import routes from './pages/routes';
import rootState from './root-state';

class App extends Component {
  constructor() {
    super();
    this.state = rootState;
  }
  render() {
    return ($inline('./app.html'));
  }
}

export default App;
