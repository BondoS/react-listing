import { createSlice } from '@reduxjs/toolkit';
import { loadAllProperties } from '../properties';
import getFilteredHotels from './helper';

const initialState = {
  pageCount: 1,
  result: [],
  loading: false
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterStart: state => {
      state.loading = true;
    },
    filterSuccess(state, { payload }) {
      state.result = payload.hotels;
      state.pageCount = payload.pageCount;
      state.loading = false;
    },
    filterFail: (state, { payload }) => {
      console.log(payload);
      state.loading = false;
    }
  }
});

export const { reducers, actions } = filterSlice;

export default filterSlice.reducer;

export const filterHotels = query => async (dispatch, getState) => {
  await dispatch(actions.filterStart());
  await dispatch(loadAllProperties()).then(
    async () => {
      const { hotels, pageCount } = await getFilteredHotels(
        getState().hotels,
        query
      );
      await dispatch(actions.filterSuccess({ hotels, pageCount }));
    },
    err => dispatch(actions.filterFail(err))
  );
};
