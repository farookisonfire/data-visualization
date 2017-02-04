export default function enrolledReducer(state=[], action) {
  switch(action.type) {
    case 'FETCH_ENROLLED_SUCCESS':
      return action.enrolled;
    default:
      return state;
  }
}
