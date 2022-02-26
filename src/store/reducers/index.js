import { combineReducers } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import { reducers as properties } from './properties';
import filter, { initialFilterState } from './filter';
import { initialPropertyState } from './properties/createSliceEnhancer';

export default combineReducers({
  hotels: properties.hotels,
  rooms: properties.rooms,
  filter,
  loadingBar: loadingBarReducer,
});

export const initialGlobalState = {
  hotels: initialPropertyState,
  rooms: initialPropertyState,
  filter: initialFilterState,
  loadingBar: { default: 0 },
};
