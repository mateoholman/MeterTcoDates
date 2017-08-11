//Reducers are pure functions that take in the previous state of your store and an action you would like to use to transform the store.

const initialState = {
  projectType: "",
  scheduleType: "",
  dateNeeded: null
}

export default function(state = initialState, action){

  switch(action.type){
    case 'SET_PROJECT_OPTIONS':
      const { projectType, scheduleType, dateNeeded } = action.payload;
      return {...state, projectType, scheduleType, dateNeeded};
    default:
      return state;
  }
}
