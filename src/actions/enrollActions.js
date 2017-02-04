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

export function fetchEnrolledStart() {
  return { type: 'FETCH_ENROLLED_START' };
}

export function fetchEnrolledSuccess(enrolled) {
  return { type: 'FETCH_ENROLLED_SUCCESS', enrolled };
}

export function fetchEnrolled() {
  return function(dispatch) {
    dispatch(fetchEnrolledStart());
    console.log('before the fetch')
    return fetch('localhost:1337/dummy')
      .then(response => {
        console.log('fetch has been made, here\'s the response', response);
        return response.json()})
      .then(json => {
        dispatch(fetchEnrolledSuccess(json));
      });
  };
}
