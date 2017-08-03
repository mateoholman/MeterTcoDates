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
              activityData.map((activity) => {
                return(
                  <tr key={activity._id}>
                    <td>{activity.activity}</td>
                    <td>{activity.duration}</td>
                    <td>CRUD</td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
      </div>
    );
  }
}

export default AdminPanel;
