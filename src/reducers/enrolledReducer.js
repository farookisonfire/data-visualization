export default function enrolledReducer(state = [], action) {
  switch(action.type) {
    case 'NAME_OF_ACTION':
      return [...state, Object.assign({}, action.course)];
    default:
      return state;
  }
}
