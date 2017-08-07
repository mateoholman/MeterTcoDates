// These reducers maintain the global application state.

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import projectReducer from './reducer_project';
import scheduleReducer from './reducer_schedule';
import activitiesReducer from './reducer_activities';

const rootReducer = combineReducers({
  project: projectReducer,
  schedule: scheduleReducer,
  activities: activitiesReducer,
  form: formReducer
});

export default rootReducer;
