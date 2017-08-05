import activityData from '../data/activities.json';

export const FETCH_ACTIVITIES = 'fetch_activities';

export function fetchActivities(){
  console.log("Activity Data from A.C. ", activityData);
  return {
    type: FETCH_ACTIVITIES,
    payload: activityData
  }
}
