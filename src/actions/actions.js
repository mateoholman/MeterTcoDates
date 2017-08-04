import activityData from '../data/activities.json';

export const FETCH_ACTIVITIES = 'fetch_activities';

export function fetchActivities(){
  return {
    type: FETCH_ACTIVITIES,
    payload: activityData
  }
}
