import React, { Component } from 'react';

import { Table } from 'react-bootstrap';

import activityData from '../data/activities.json';

class AdminPanel extends Component {

  render() {
    return (
      <div className="admin-panel">
        <h2>Admin Panel</h2>
        <Table responsive>
          <thead>
            <tr>
              <td>Activity</td>
              <td>Duration</td>
              <td>CRUD</td>
            </tr>
          </thead>
          <tbody>
            {
              console.log("Data: " + activityData)
            }
          </tbody>
        </Table>
      </div>
    );
  }
}

export default AdminPanel;
