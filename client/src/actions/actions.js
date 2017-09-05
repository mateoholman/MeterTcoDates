//The actions and action creators are used to modifiy the global application state.

/* Action Types */
export const RETRIEVE_ACTIVITIES = 'RETRIEVE_ACTIVITIES';
export const SET_ACTIVITIES_FILTER = 'SET_ACTIVITIES_FILTER';
export const SET_ACTIVITY_DATE = 'SET_ACTIVITY_DATE';

export const SET_PROJECT_OPTIONS = 'SET_PROJECT_OPTIONS';

/* Other Constants */
export const ACTIVITIES_FILTERS = {
  SHOW_ALL: 'SHOW_ALL',
  METER: 'METER',
  OCCUPANCY: 'OCCUPANCY'
}

/* Action Creators */

export function setActivityDate(activityId, date){
  return {
    type: 'SET_ACTIVITY_DATE',
    payload: {
      activity: activityId,
      date: date
    }
  }
}

export function retrieveActivities(){
  return {
    type: 'RETRIEVE_ACTIVITIES'
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
  return {
    type: 'SET_PROJECT_OPTIONS',
    payload: projectInfo
  };
}
