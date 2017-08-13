import activityData from '../data/activities.json';

const initialState = {
  activities: activityData,
  filter: ''
};

export default function(state = initialState, action) {

  switch (action.type) {

    case 'RETRIEVE_ACTIVITIES':
      //We only need to return the state, because we grabbed the activity data in the initial state.
      return state;

    case 'SET_ACTIVITY_DATE':
      //Find the activity with the id passed and change the date field
      const activityId = action.payload.activity - 1;
      const newDate = action.payload.date;
      const newActivities = state.activities;
      newActivities[activityId].date = newDate;
      console.log(newActivities[activityId].activity + " new date is " + newActivities[activityId].date);
      return {...state, newActivities};

    case 'SET_ACTIVITIES_FILTER':
      break;

    default:
      return state;
  }

  return activityData;
}
