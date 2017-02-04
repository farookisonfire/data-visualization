// export default function enrolledReducer(state = [], action) {
//   switch(action.type) {
//     case 'LOAD_ENROLLED_SUCCESS':
//       return action.enrolled;
//     default:
//       return state;
//   }
// }

export default function fetchingEnrolled(state = false, action) {
  switch(action.type) {
    case 'FETCH_ENROLLED_START':
      return true;
    default:
      return state;
  }
}
