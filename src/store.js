import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { loadingBarMiddleware } from 'react-redux-loading-bar';
import rootReducer from './store/reducers';

const store = configureStore({
  reducer: rootReducer,
  middleware: [loadingBarMiddleware(), ...getDefaultMiddleware()]
});

export default store;
