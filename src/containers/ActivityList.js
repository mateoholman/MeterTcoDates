import React, {Component} from 'react';
import { connect } from 'react-redux';

import { fetchActivities } from '../actions/actions';

class ActivityList extends Component {

  componentDidMount(){
    this.props.fetchActivities();
  }

  render() {
    console.log(this.props.activities);
    return(
      this.props.activities.map(activity => {
        return(
          <tr key={activity._id}>
            <td>{activity.activity}</td>
            <td>{activity.duration}</td>
            <td>CRUD</td>
          </tr>
        )
      })
    );
  }
}

function mapStateToProps(state) {
  return {
    activities: state.activities
  };
}

export default connect(mapStateToProps, { fetchActivities })(ActivityList);
