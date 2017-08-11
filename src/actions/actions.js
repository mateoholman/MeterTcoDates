//The actions and action creators are used to modifiy the global application state.

/* Action Types */
export const RETRIEVE_ACTIVITIES = 'RETRIEVE_ACTIVITIES';
export const SET_ACTIVITIES_FILTER = 'SET_ACTIVITIES_FILTER';

export const SET_PROJECT_OPTIONS = 'SET_PROJECT_OPTIONS';

/* Other Constants */
export const ACTIVITIES_FILTERS = {
  SHOW_ALL: 'SHOW_ALL',
  METER: 'METER',
  OCCUPANCY: 'OCCUPANCY'
}

/* Action Creators */

export function retrieveActivities(activities){
  return {
    type: 'RETRIEVE_ACTIVITIES',
    payload: activities
  };
}

export function setActivitiesFilter(filter){
  return {
    type: 'SET_ACTIVITIES_FILTER',
    payload: filter
  };
}

export function setProjectOptions(projectInfo){
  //chooseProjectOptions is an action creator and needs to return an action
  console.log('setProjectOptions action called');
  return {
    type: 'SET_PROJECT_OPTIONS',
    payload: projectInfo
  };
}
