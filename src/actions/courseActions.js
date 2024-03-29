import courseApi from '../api/mockCourseApi';

export function nameOfAction() {
  return { type: 'NAME_OF_ACTION' };
}

export function loadCoursesSuccess(courses) {
  return { type: 'LOAD_COURSES_SUCCESS', courses };
}

export function loadCourses() {
  return function(dispatch) {
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw(error);
    });
  };
}
