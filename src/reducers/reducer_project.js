import { setProjectOptions } from '../actions/actions';

const initialState = {
  projectType: "DTRes",
  scheduleType: "waterMeter",
  dateNeeded: new Date()
}

export default function(state = initialState, action){
  switch(action.type){
    case SET_PROJECT_OPTIONS:
      const { projectType, scheduleType, dateNeeded } = action.payload;
      return {...state, projectType, scheduleType, dateNeeded };
    default:
      return state;
  }
}
