import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';

import { retrieveActivities } from '../actions/actions';

class ActivityList extends Component {

  renderActivities(){
    return this.props.activities.activities.map((activity) => {
      return(
        <tr key={activity._id}>
          <td>{activity.activity}</td>
          <td>{activity.duration}</td>
          <td>CRUD</td>
        </tr>
      );
    })
  }

  render() {
    return (
      <Table responsive>
        <thead>
          <tr>
            <td>Activity</td>
            <td>Duration</td>
            <td>CRUD</td>
          </tr>
        </thead>
        <tbody>
          {this.renderActivities()}
        </tbody>
      </Table>
    )
  }

}

function mapStateToProps(state) {
  return {
    activities: state.activities
  };
}

export default connect(mapStateToProps)(ActivityList);
