import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <h2>Choose The Type of Project</h2>
        <Button>Downtown Residential / Hotel</Button>
        <Button>Downtown Office</Button>
        <Button>Multifamily</Button>
        <Button>Warehouse / Office</Button>
      </div>
    );
  }
}

export default ProjectForm;
