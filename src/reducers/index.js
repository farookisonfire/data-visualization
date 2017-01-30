import {combineReducers} from 'redux';
import enrolled from './enrolledReducer';
import courses from './courseReducer';

const rootReducer = combineReducers({
  enrolled,
  courses
});

export default rootReducer;
