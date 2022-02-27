import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import reducer, { initialGlobalState } from './src/store/reducers';
import { BrowserRouter as Router } from 'react-router-dom';

// this is a handy function that I normally make available for all my tests
// that deal with connected components.

// you can provide initialState or the entire store that the ui is rendered with
export const render = (
  ui,
  {
    initialState = initialGlobalState,
    store = configureStore({
      reducer,
      middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
    }),
    route = '/',
    ...renderOptions
  } = {}
) => {
  window.history.pushState({}, 'Test page', route);
  const Wrapper = ({ children }) => (
    <Provider store={store}>
      <Router>{children}</Router>
    </Provider>
  );

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};
