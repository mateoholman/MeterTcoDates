//Connect & mapStateToProps
//Display the activity data rows based on the scheduleType
//Calculate the dates based on the projectType and dateNeeded

import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';


class ProjectTable extends Component {

  renderTableRows(){
    console.log("Project type: " + this.props.projectType);
  }

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
          <tbody>
            {this.renderTableRows()}
          </tbody>
        </Table>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    projectType: state.project.projectType,
    scheduleType: state.project.scheduleType,
    dateNeeded: state.project.dateNeeded
  };
}

export default connect (mapStateToProps)(ProjectTable);
