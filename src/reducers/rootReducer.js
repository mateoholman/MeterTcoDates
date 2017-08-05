import { combineReducers } from 'redux';
import projectReducer from './reducer_project';
import scheduleReducer from './reducer_schedule';
import activitiesReducer from './reducer_activities';

const rootReducer = combineReducers({
  project: projectReducer,
  schedule: scheduleReducer,
  activities: activitiesReducer
});

export default rootReducer;
