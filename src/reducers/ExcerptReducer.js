import {
  EXCERPTS_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EXCERPTS_FETCH_SUCCESS:
      //action.payload === {prop: 'name', value: 'Loki'}
      console.log(action);
      return action.payload;
    default:
      return state;
  }
};
