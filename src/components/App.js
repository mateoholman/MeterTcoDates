import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import Header from './Header';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <Grid>
        <div className="App">
          <Header />
        </div>
      </Grid>
    );
  }
}

export default App;
