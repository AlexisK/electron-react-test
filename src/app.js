import './app.less';
import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import routes from './pages/routes';

class App extends Component {
  render() {
    return ($inline('./app.html'));
  }
}

export default App;
