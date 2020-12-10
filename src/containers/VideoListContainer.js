import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

var VideoListContainer = connect(mapStateToProps, mapDispatchToProps)(VideoList);
  // return connect(mapStateToProps, mapDispatchToProps)(VideoList)
    // mapDispatchToProps
    // mapStateToProps
      // select the part of store data that the connected component needs (https://react-redux.js.org/using-react-redux/connect-mapstate)
        // in this case, that's just currentVideo
// };

// add ownProps here?
const mapStateToProps = (state) => {
  return {
    videos: state.videos
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeVideo: () => dispatch(changeVideo())
  };
};


// const mapDispatchToProps = (dispatch, ownProps) => {
//   toggleTodo: () => dispatch(toggleTodo(ownProps.todoId))
// }

/**
 *
 * // const state = store.getState()
// function mapStateToProps(state, ownProps)
  // the above function should return a plain object containing the data that the connected component needs
 */



//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

export default VideoListContainer;
