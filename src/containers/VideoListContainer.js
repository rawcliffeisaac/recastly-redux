import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

const mapStateToProps = (store) => ({
  videos: store.videos
});

const mapDispatchToProps = (dispatch) => ({
  handleVideoListEntryTitleClick: (video) => {
    dispatch(changeVideo(video));
  }
});

var VideoListContainer = connect(mapStateToProps, mapDispatchToProps)(VideoList);

export default VideoListContainer;
