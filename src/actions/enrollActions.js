import enrolledApi from '../api/mockEnrolledApi';

export function loadEnrolledSuccess(enrolled) {
  return { type: 'LOAD_ENROLLED_SUCCESS', enrolled };
}

export function loadEnrolled() {
  return function(dispatch) {
    return enrolledApi.getAllEnrolled().then(enrolled => {
      dispatch(loadEnrolledSuccess(enrolled));
    }).catch(error => {
      throw(error);
    });
  };
}
