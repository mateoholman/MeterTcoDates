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
    this.setMeterDates(firstDate);
  }

  setMeterDates(startDate){
    //Set the first date to the start date
    console.log("Start date is first: " + startDate);
    this.props.setActivityDate(this.props.activities.activities[0]._id, startDate);
    let lastDate = startDate;
    //Calulate the rest of the dates involved in obtaining the meter
    for (let i=1; i<8; i++){
      let newDate = lastDate.getDate() +  this.props.activities.activities[(i-1)].duration;
      let updatedDate = new Date(lastDate);
      updatedDate.setDate(newDate);
      console.log("updatedDate is now: " + updatedDate);
      this.props.setActivityDate(this.props.activities.activities[i]._id, updatedDate);
      lastDate = updatedDate;
    };

    // let updatedDate = newDate.getDate() + this.props.activities.activities[1].duration;
    // let anotherDate = new Date(newDate);
    // anotherDate.setDate(updatedDate);
    // this.props.setActivityDate(this.props.activities.activities[1]._id, anotherDate);
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
    const newDate = new Date(dateNeeded);
    newDate.setDate(updatedDate);
    console.log("Updated date is: " + newDate);
    return newDate;
  }

  renderTableRows(){
    //If the schedule type is water meter, only render those rows.
    //Else, render all the rows
    if(this.props.scheduleType === 'waterMeter'){

      return this.props.activities.activities.map((activity) => {
        while(activity._id < 9) {
          console.log("Activity rendered is: " + activity.activity + " and the date is: " + activity.date);
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
