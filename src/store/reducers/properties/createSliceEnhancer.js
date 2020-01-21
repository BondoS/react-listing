import { createSlice } from '@reduxjs/toolkit';
import { listWithIds } from '../../../utils/normalize';

const initialState = {
  ids: [],
  list: {},
  isLoading: false,
  lastFetch: null
};

const startLoading = state => {
  state.isLoading = true;
};

export const slice = dataType =>
  createSlice({
    name: dataType,
    initialState,
    reducers: {
      getDataStart: startLoading,
      getDataSuccess(state, { payload }) {
        const { ids, list } = listWithIds(payload);
        state.ids = ids;
        state.list = list;
        state.isLoading = false;
        state.fetchedAt = new Date().getTime();
      },
      getDataFail(state) {
        state.isLoading = false;
      },
      getItemById(state, { payload }) {
        return state.list[payload];
      },
      setDateStart: startLoading,
      setDateSuccess(state, { payload }) {
        state.list[payload.id] = payload;
        if (!state.ids.includes(payload.id)) state.ids.push(payload.id);
        state.isLoading = false;
      },
      setDateFail(state, { payload }) {
        // eslint-disable-next-line no-console
        console.log('error', payload);
        state.isLoading = false;
      },
      deleteDataStart: startLoading,
      deleteDataSuccess(state, { payload }) {
        delete state.list[payload];
        state.ids = state.ids.filter(id => payload !== id);
        state.isLoading = false;
      },
      deleteDataFail(state, { payload }) {
        console.log('error', payload);
        state.isLoading = false;
      }
    }
  });
