import { combineReducers } from 'redux';
import projectReducer from './reducer_project';
import scheduleReducer from './reducer_schedule';

const rootReducer = combineReducers({
  project: projectReducer,
  schedule: scheduleReducer
});

return default rootReducer;
