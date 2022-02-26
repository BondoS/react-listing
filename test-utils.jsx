import { render as rtlRender, screen } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import reducer, { initialGlobalState } from './src/store/reducers';

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
  const Wrapper = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};
