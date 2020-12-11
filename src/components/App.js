import React from 'react';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import VideoListContainer from '../containers/VideoListContainer.js';

//////////////////////////
import SampleData from '../data/exampleVideoData.js';
// import Store from '../store/store.js'; // THIS LINE THROWS BIG ERRORS
// I WANT THE LINE ABOVE SO I CAN TEST WHAT'S IN THE STORE IM CREATING IN STORE.JS'
// console.log('hi'); // this console.log works. i guess that's something.
import Store from '../store/store.js';
// console.log(Store.getState());
////////////////////////

var App = () => (
  <div>
    <nav className="navbar">
      <div className="col-md-6 col-md-offset-3">
        {/* <Search getYouTubeVideos={this.getYouTubeVideos}/> */}
        {/* <Search /> */}
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        {/* <VideoPlayer video={this.state.currentVideo}/> */}
      </div>
      <div className="col-md-5">
        <VideoListContainer />
        {/* store={props.store} */}
        {/* videos={videos} */}
        {/* <VideoList
          // handleVideoListEntryTitleClick={this.handleVideoListEntryTitleClick.bind(this)}
          videos={this.state.videos}
        /> */}
      </div>
    </div>
  </div>
);
export default App;


// class App extends React.Component {
//   constructor(props) {
//     super(props);

    // this.state = {
    //   // videos: [],
    //   // currentVideo: null
    //   videos: this.sampleData(),
    //   currentVideo: this.sampleData()[0]
    // };

    // this.getYouTubeVideos = this.getYouTubeVideos.bind(this);
  // }

  // sampleData() {
  //   return SampleData;
  // }

  // componentDidMount() {
  //   this.getYouTubeVideos('react tutorials');
  // }

  // handleVideoListEntryTitleClick(video) {
  //   this.setState({currentVideo: video});
  // }

  // getYouTubeVideos(query) {
  //   var options = {
  //     key: this.props.API_KEY,
  //     query: query
  //   };

  //   this.props.searchYouTube(options, (videos) =>
  //     this.setState({
  //       videos: videos,
  //       currentVideo: videos[0]
  //     })
  //   );
  // }
  //TODO: swap out the React components below for the container components
  //  you wrote in the 'containers' directory.
  // render() {
    //   return (
