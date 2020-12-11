import Redux from 'redux';

import TestData from '../data/exampleVideoData.js';
const defaultState = {
  videos: TestData,
  currentVideo: TestData[0]
};

var currentVideoReducer = (state = null, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  // if (!state) { return defaultState; }
  switch (action.type) {
  case 'CHANGE_CURRENT_VIDEO':
    return action.video || null;
  default:
    return state;
  }

  // switch (type) {
  //   case 'CURRENT_VIDEO':
  //     return { 'CURRENT_VIDEO' : payload }
  //   default:
  //     return state;
  // };
};
export default currentVideoReducer;



// let testData = TestData;
// let testState = {
//   videos: TestData(),
//   currentVideo: TestData()[0]
// };
// console.log(testData);
// console.log(testState);
// console.log(testAction);
// console.log(currentVideoReducer(testState, testAction));