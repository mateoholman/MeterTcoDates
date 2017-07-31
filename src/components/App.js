import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import ProjectType from './ProjectType';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Header />
          <Switch>
            <Route path='/' component={ProjectType} />
          </Switch>
        </div>
    );
  }
}

export default App;
