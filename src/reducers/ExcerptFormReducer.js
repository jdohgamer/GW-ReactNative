import {
  EXCERPT_UPDATE,
  EXCERPT_CREATE,
  EXCERPT_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EXCERPT_UPDATE:
      //action.payload === {prop: 'name', value: 'Loki'}
      return { ...state, [action.payload.prop]: action.payload.value };
    case EXCERPT_CREATE:
      return INITIAL_STATE;
    case EXCERPT_SAVE_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
