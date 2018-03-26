//one reducer to handle all authorization of the App
//we always have the exact same format for emailChanged//reducer we write
//we can never return 'undefined from our state, in this case its 'INITIAL_STATE'
import { EMAIL_CHANGED,
          PASSWORD_CHANGED,
          LOGIN_USER_SUCCESS,
          LOGIN_USER_FAIL,
          LOGIN_USER } from '../actions/types';

const INITIAL_STATE = { email: '', password: '', user: null, error: '', loading: false };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    //the brackets below CREATE A NEW OBJECT
    //because we created a new object when we return This
    //redux will think we changed something and compare it to the old state
    //the poit is WE MUST CREATE A NEW OBJECT WHEN SENDING THE STATE BACK TO REDUX
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER:
      return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload, loading: false, email: '', password: '' };
    case LOGIN_USER_FAIL:
     return { ...state, error: 'AUTHENTICATION FAILED', password: '', loading: false };
    default:
      return state;
  }
};
