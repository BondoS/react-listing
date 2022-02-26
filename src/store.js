import { configureStore } from '@reduxjs/toolkit';
import { loadingBarMiddleware } from 'react-redux-loading-bar';
import rootReducer from './store/reducers';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [
    loadingBarMiddleware(),
    ...getDefaultMiddleware(),
  ],
});

export default store;
