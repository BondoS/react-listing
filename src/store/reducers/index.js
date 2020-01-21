import { combineReducers } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import { reducers as properties } from './properties';
import filter from './filter';

export default combineReducers({
  hotels: properties.hotels,
  rooms: properties.rooms,
  filter,
  loadingBar: loadingBarReducer
});
