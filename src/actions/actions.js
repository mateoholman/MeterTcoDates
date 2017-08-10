//The actions and action creators are used to modifiy the global application state.

/* Action Types */
export const RETRIEVE_ACTIVITIES = 'RETRIEVE_ACTIVITIES';
export const SET_ACTIVITIES_FILTER = 'SET_ACTIVITIES_FILTER';

export const SET_PROJECT_OPTIONS = 'SET_PROJECT_OPTIONS';

export function chooseProjectOptions(projectInfo){
  //chooseProjectOptions is an action creator and needs to return an action
  console.log('Project info has been applied: ' + projectInfo.projectType);
  return {
    type: 'PROJECT_SELECTED',
    payload: projectInfo
  };
}
