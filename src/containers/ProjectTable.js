// Calculate the durations to water meter
//    Start by calculating date + duration
//Display the activity data rows based on the scheduleType
//Calculate the dates based on the projectType and dateNeeded

import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';


class ProjectTable extends Component {

  renderTableRows(){
    //If the schedule type is water meter, only render those rows.
    //Else, render all the rows
    if(this.props.scheduleType === 'waterMeter'){
      console.log("Nothing to see here");
    }
    else {
      return this.props.activities.map((activity) => {
        return(
          <tr key={activity._id}>
            <td>{activity.activity}</td>
            <td>{activity.duration}</td>
          </tr>
        );
      })
    }

    console.log("Schedule type: " + this.props.scheduleType);

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
    dateNeeded: state.project.dateNeeded,
    activities: state.activities,
  };
}

export default connect (mapStateToProps)(ProjectTable);
