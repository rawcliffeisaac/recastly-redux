import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';

//////////// //////////// ////////////
import exampleVideoData from '../data/exampleVideoData.js';
import currentVideoReducer from './../reducers/currentVideo.js';
//////////// //////////// ////////////


// TODO:  Create your redux store, apply thunk as a middleware, and export it!
const store = createStore(currentVideoReducer);
// const store = createStore();

/**
 * store.getState()
 * store.dispatch(action)
 * store.subscribe()
 */

export default store;