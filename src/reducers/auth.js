
// reducer to add & remove users who are logged in
export default (state = {}, action) => {
  switch(action.type) {
    case 'LOGIN':
      return {
        uid: action.uid
      }
    case 'LOGOUT':
      return {}
    default:
      return state
  }
}