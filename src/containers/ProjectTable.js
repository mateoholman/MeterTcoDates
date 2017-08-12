// Calculate the durations to water meter
//    Start by calculating date + duration
//Display the activity data rows based on the scheduleType
//Calculate the dates based on the projectType and dateNeeded

import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';


class ProjectTable extends Component {

  //Maybe we can take the array of activities, create a new local object that
  //has an added date key/value pair

  calculateMeterDuration(){
    const tcoDuration = this.props.activities.reduce(function(sum, activity) {
      while(activity._id < 9){
        return sum + activity.duration;
      }
      return sum;
    },0);
    return tcoDuration;
  }

  calculateMeterStartDate(duration){
    //Date needed - total duration
    const dateNeeded = this.props.dateNeeded;
    console.log('Date needed is: ' + dateNeeded + ' and duration is: ' + duration);
    const updatedDate = dateNeeded.getDate() - duration;
    console.log('The updatedDate is: ' + updatedDate);
    dateNeeded.setDate(updatedDate);
    console.log('Date needed is now: ' + dateNeeded);
    return dateNeeded;
  }

  renderTableRows(){
    //If the schedule type is water meter, only render those rows.
    //Else, render all the rows
    console.log("The meter duration is: " + this.calculateMeterDuration());
    if(this.props.scheduleType === 'waterMeter'){
      return this.props.activities.map((activity) => {
        while(activity._id < 9) {
          return(
            <tr key={activity._id}>
              <td>{activity.activity}</td>
              <td>{activity.duration}</td>
            </tr>
          );
        }
      })
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
  }

  render() {

    const tcoDuration = this.calculateMeterDuration();
    const firstDate = this.calculateMeterStartDate(tcoDuration);
    console.log('The first date is: ' + firstDate);

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
