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
    const firstDate = this.calculateMeterStartDate(this.props.dateNeeded, tcoDuration);
    if(this.props.scheduleType === 'waterMeter'){
      this.setMeterDates(firstDate);
    }
    else{
      this.setTcoDates(this.props.dateNeeded);
    }
  }

  setMeterDates(startDate){
    //Set the first date to the start date
    this.props.setActivityDate(this.props.activities.activities[0]._id, startDate);
    let lastDate = startDate;
    //Calulate the rest of the dates involved in obtaining the meter, except
    //for the actual meter date!
    for (let i=1; i<8; i++){
      let newDate = lastDate.getDate() +  this.props.activities.activities[(i-1)].duration;
      let updatedDate = new Date(lastDate);
      updatedDate.setDate(newDate);
      this.props.setActivityDate(this.props.activities.activities[i]._id, updatedDate);
      lastDate = updatedDate;
    };
  }

  getTcoMeterDuration(){
    switch (this.props.projectType){
      case 'DTRes':
        return 403;
      case 'DTOffice':
        return 222;
      case 'Multifamily':
        return 403;
      case 'OfficeWarehouse':
        return 192;
      default:
        return 0;
    }
  }

  setTcoDates(tcoDate){
    // Calculate the meter release date based on the project type
      const meterDuration = this.getTcoMeterDuration();
      const dateNeeded = tcoDate.getDate() - meterDuration;
      const newDate = new Date(tcoDate);
      newDate.setDate(dateNeeded);
    // Set the meter release date based on the calculation
      this.props.setActivityDate(this.props.activities.activities[7]._id, newDate);
    // Use the setMeterDates() with the new meter date
      const shorDur = this.calculateMeterDuration();
      const newStartDate = this.calculateMeterStartDate(newDate, shorDur);
      this.setMeterDates(newStartDate);

    // Calculate the sum of durations of all activities after activity 18
      const durationAfter19 = this.calculateDurationAfter19();
    // Set the date of the first activity after public closeout to the end
      this.setOccupancyDates(durationAfter19);
      //Activity 9 "Pavement complete & utilties adjusted to grade. Schedule Engineer's punch list walk. " is tied to Activity 19 "Must be completed for TCO (stocking)"
      //Activity 19 is a reversed tie to the TCO date.
    // Set the remainder of the dates

  }

  setOccupancyDates(overallDuration){
    //Calculate the date of Activity 18 first
    let currentDate = this.calculateMeterStartDate(this.props.dateNeeded, overallDuration);
    for (let i=19; i<this.props.activities.activities.length;i++){
      this.props.setActivityDate(this.props.activities.activities[i]._id, currentDate);
      let newDate = currentDate.getDate() +  this.props.activities.activities[i].duration;
      let updatedDate = new Date(currentDate);
      updatedDate.setDate(newDate);
      currentDate = updatedDate;
    }

    currentDate = this.calculateMeterStartDate(this.props.activities.activities[19].date, (this.props.activities.activities[8].duration * -1));
    for (let i=8; i<19; i++){
      this.props.setActivityDate(this.props.activities.activities[i]._id, currentDate);
      let newDate = currentDate.getDate() +  this.props.activities.activities[i+1].duration;
      let updatedDate = new Date(currentDate);
      updatedDate.setDate(newDate);
      currentDate = updatedDate;
    }
  }

  calculateDurationAfter19(){
    let afterDuration = 0;
    for (let i=19; i<this.props.activities.activities.length - 1;i++){
      afterDuration += this.props.activities.activities[i].duration;
    }
    return afterDuration;
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

  calculateMeterStartDate(meterDate, duration){
    const updatedDate = meterDate.getDate() - duration;
    const newDate = new Date(meterDate);
    newDate.setDate(updatedDate);
    return newDate;
  }

  renderTableRows(){
    //If the schedule type is water meter, only render those rows.
    //Else, render all the rows
    if(this.props.scheduleType === 'waterMeter'){

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
            <td>{activity.date ? activity.date.toLocaleDateString() : "Loading"}</td>
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
