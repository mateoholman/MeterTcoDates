import { FETCH_ACTIVITIES } from '../actions/actions';

export default function(state={}, action) {
  switch(action.typ){
    case: FETCH_ACTIVITIES:
      return action.payload.data;
    default:
      return state;
  }
}
