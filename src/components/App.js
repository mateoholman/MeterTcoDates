import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import ProjectForm from './ProjectForm';
import ProjectTable from './ProjectTable';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Header />
          <Switch>
            <Route exact path='/' component={ProjectForm} />
            <Route path='/ProjectSchedule' component={ProjectTable} />
          </Switch>
        </div>
    );
  }
}

export default App;
