// Create a set_date action to update the activity dates in the store.

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
    const updatedDate = dateNeeded.getDate() - duration;
    dateNeeded.setDate(updatedDate);
    return dateNeeded;
  }

  meterDateArrayGen(startDate){
    //Return an array of dates for the activities associated with the meter
    let newDateArry = [];
    let currentDate = startDate;
    let newDate = startDate;
    newDateArry[0] = startDate;
    for (let i=1; i<8; i++) {
      let duration = this.props.activities[i-1].duration;
      newDate = currentDate.getDate() + duration;
      currentDate.setDate(newDate);
      newDateArry[i] = currentDate;
      console.log('Date saved at ' + i + ' is: ' + newDateArry[i]);
    };
    return newDateArry;
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
    const dateArray = this.meterDateArrayGen(firstDate);

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
