import Redux from 'redux';

import TestData from '../data/exampleVideoData.js';
const defaultState = {
  videos: TestData,
  currentVideo: TestData[0]
};

var currentVideoReducer = (state = defaultState, {type, payload}) => {
  //TODO: define a reducer for the currentVideo field of our state.
  switch (type) {
  case 'CHANGE_CURRENT_VIDEO':
    return {currentVideo: payload};
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