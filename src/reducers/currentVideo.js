import Redux from 'redux';

var currentVideoReducer = (state, {type, payload}) => {
  //TODO: define a reducer for the currentVideo field of our state.
  switch (type) {
    case 'CURRENT_VIDEO':
      return { 'CURRENT_VIDEO' : payload }
    default:
      return state;
  };
}
export default currentVideoReducer;
