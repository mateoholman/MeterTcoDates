import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import Landing from './Landing';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Header />
          <Switch>
            <Route path='/' component={Landing} />
          </Switch>
        </div>
    );
  }
}

export default App;
