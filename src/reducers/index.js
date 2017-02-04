import {combineReducers} from 'redux';
import enrolled from './enrolledReducer';
import courses from './courseReducer';
import fetchingEnrolled from './fetchingEnrolledReducer';

const rootReducer = combineReducers({
  enrolled,
  courses,
  fetchingEnrolled
});

export default rootReducer;
