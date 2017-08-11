//Display the activity data rows based on the scheduleType
//Calculate the dates based on the projectType and dateNeeded

import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class ProjectTable extends Component {
  render() {
    return(
      <div className="project-table">
        <h2>Project Table</h2>
        <Table responsive>
          <thead>
            <tr>
              <th>Activity</th>
              <th>Date</th>
            </tr>
          </thead>
        </Table>
      </div>
    );
  }
}

export default ProjectTable;
