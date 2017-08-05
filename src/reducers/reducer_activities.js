import { FETCH_ACTIVITIES } from '../actions/actions';

export default function(state={activities: []}, action) {
  switch (action.type) {
    case FETCH_ACTIVITIES:
      return action.payload.data;
    default:
      return state;
  }
}
