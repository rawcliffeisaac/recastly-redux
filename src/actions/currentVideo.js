var changeVideo = (video) => ({
  //TODO:  Return some action object to change the currently playing video.
  type: 'CHANGE_CURRENT_VIDEO',
  payload: video
});

export default changeVideo;
