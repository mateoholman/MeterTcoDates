// Create a set_date action to update the activity dates in the store.

import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setActivityDate } from '../actions/actions';

class ProjectTable extends Component {

  //Maybe we can take the array of activities, create a new local object that
  //has an added date key/value pair

  calculateMeterDuration(){
    const tcoDuration = this.props.activities.activities.reduce(function(sum, activity) {
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
      let duration = this.props.activities.activities[i-1].duration;
      newDate = currentDate.getDate() + duration;
      currentDate.setDate(newDate);
      newDateArry[i] = currentDate;
      console.log('Date saved at ' + i + ' is: ' + newDateArry[i]);
    };
    return newDateArry;
  }

  renderTableRows(datesAry){
    //If the schedule type is water meter, only render those rows.
    //Else, render all the rows
    console.log("The meter duration is: " + this.calculateMeterDuration());
    if(this.props.scheduleType === 'waterMeter'){
      return this.props.activities.activities.map((activity) => {
        while(activity._id < 9) {
          return(
            <tr key={activity._id}>
              <td>{activity.activity}</td>
              <td>{datesAry[activity._id - 1]}</td>
            </tr>
          );
        }
      })
    }

    else {
      return this.props.activities.activities.map((activity) => {
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
    console.log("The dateArray is: " + dateArray)

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
            {this.renderTableRows(dateArray)}
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

function mapDispatchToProps(dispatch){
  return bindActionCreators({setActivityDate}, dispatch);
}

export default connect (mapStateToProps, mapDispatchToProps)(ProjectTable);
