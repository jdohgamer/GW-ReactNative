import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ExcerptFormReducer from './ExcerptFormReducer';
import ExcerptReducer from './ExcerptReducer';


export default combineReducers({
  auth: AuthReducer,
  excerptForm: ExcerptFormReducer,
  excerpts: ExcerptReducer

});
