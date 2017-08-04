import React, {Component} from 'react';
import { Connect } from 'react-redux';

import activityData from '../data/activities.json';

class ActivityList extends Component {

  renderActivity(){
    return this.props.activityData.map((activity) => {
      return(
        <tr key={activity._id}>
          <td>{activity.activity}</td>
          <td>{activity.duration}</td>
          <td>CRUD</td>
        </tr>
      )
    })
  }

  render() {
    return(
      {renderActivity()}
    );
  }
}

function mapStateToProps(state) {
  return {
    activities: state.activities
  };
}

export default connect(mapStateToProps)(ActivityList);
