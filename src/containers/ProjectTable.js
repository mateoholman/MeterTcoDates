// Create a set_date action to update the activity dates in the store.

import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setActivityDate } from '../actions/actions';

class ProjectTable extends Component {

  componentDidMount(){
    //We'll try putting the date functions in here to prevent a reloading loop
    const tcoDuration = this.calculateMeterDuration();
    const firstDate = this.calculateMeterStartDate(tcoDuration);
    //Now we'll try calling the setActivityDate() to prevent the loop
    for (let i=0; i<9; i++){
      this.props.setActivityDate(this.props.activities.activities[i]._id, firstDate);
      console.log("Activity: " + this.props.activities.activities[i].activity + " has a date of: " + this.props.activities.activities[i].date);
    }
    this.renderTableRows();
  }

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

  renderTableRows(){
    //If the schedule type is water meter, only render those rows.
    //Else, render all the rows
    console.log("The meter duration is: " + this.calculateMeterDuration());
    console.log("The first activity date is now: " + this.props.activities.activities[0].date);
    if(this.props.scheduleType === 'waterMeter'){

      // for (let i=0; i<9; i++){
      //       return(
      //         <tr key={this.props.activities.activities[i]._id}>
      //           <td>{this.props.activities.activities[i].activity}</td>
      //           <td>{this.props.activities.activities[i].date ? this.props.activities.activities[i].date.toLocaleDateString() : "Loading"}</td>
      //         </tr>
      //       );
      // }

      return this.props.activities.activities.map((activity) => {
        while(activity._id < 9) {
          return(
            <tr key={activity._id}>
              <td>{activity.activity}</td>
              <td>{activity.date ? activity.date.toLocaleDateString() : "Loading"}</td>
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

    const dateArray = [];

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

function mapDispatchToProps(dispatch){
  return bindActionCreators({setActivityDate}, dispatch);
}

export default connect (mapStateToProps, mapDispatchToProps)(ProjectTable);
