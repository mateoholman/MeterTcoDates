import React, { Component } from 'react';

import ActivityList from '../containers/ActivityList';

class AdminPanel extends Component {

  render() {
    return (
      <div className="admin-panel">
        <h2>Admin Panel</h2>
        <ActivityList />
      </div>
    );
  }
}

export default AdminPanel;
