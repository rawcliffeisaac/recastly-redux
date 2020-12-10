var changeVideo = (video) => ({
  //TODO:  Return some action object to change the currently playing video.
  type: 'CURRENT_VIDEO',
  payload: video
});

export default changeVideo;
