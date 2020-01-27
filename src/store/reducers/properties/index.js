import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { slice } from './createSliceEnhancer';
import delay from '../../../utils/api/delay';
import {
  getAllProperties,
  setProperty,
  deleteProperty
} from '../../../services/properties';
import { cache } from '../../../utils/envVarMap';
import { stringToNumber, numberToString } from '../../../utils/normalize';

const slices = { reducers: {}, actions: {} };
const propertiesNames = ['hotels', 'rooms'];

propertiesNames.forEach(element => {
  const currSlice = slice(element);
  slices.reducers[element] = currSlice.reducer;
  slices.actions[element] = currSlice.actions;
});

export const { reducers, actions } = slices;

// eslint-disable-next-line consistent-return
export const getProperties = type => async (dispatch, getState) => {
  // if it has been fetched less than the number of caching seconds, then abort operation
  if ((new Date().getTime() - getState()[type].fetchedAt) / 1000 < cache) {
    return Promise.resolve();
  }
  await dispatch(showLoading());
  // mock waiting for an API
  await delay(500);
  await dispatch(actions[type].getDataStart());
  await getAllProperties(type).then(
    // map to fix this issue https://github.com/facebook/react/issues/9402
    // in a real life project I would just write a function to handle float onChange or convert it to select option
    async res => {
      await dispatch(
        actions[type].getDataSuccess(res.map(item => numberToString(item)))
      );
      await dispatch(hideLoading());
    },
    async error => {
      await dispatch(actions[type].getDataFail(error));
      await dispatch(hideLoading());
    }
  );
};

export const loadAllProperties = () => async dispatch => {
  await Promise.all(
    propertiesNames.map(property => dispatch(getProperties(property)))
  );
};

export const getPropertyById = (type, id) => async (dispatch, getState) => {
  await dispatch(loadAllProperties());
  return getState()[type].list[id];
};

export const setPropertyById = (type, action, payload) => async dispatch => {
  await dispatch(actions[type].setDateStart());
  await dispatch(showLoading());
  await delay(700);
  if (process.env.NODE_ENV !== 'development') {
    dispatch(actions[type].setDateSuccess(payload));
    dispatch(hideLoading());
  } else {
    await setProperty(type, action, payload.id, stringToNumber(payload)).then(
      () => {
        dispatch(actions[type].setDateSuccess(payload));
        dispatch(hideLoading());
      },
      error => {
        dispatch(actions[type].setDateFail(error));
        dispatch(hideLoading());
      }
    );
  }
};

export const deletePropertyById = (type, id) => async dispatch => {
  await dispatch(showLoading());
  await delay(300);
  if (process.env.NODE_ENV !== 'development') {
    dispatch(actions[type].deleteDataSuccess(id));
    dispatch(hideLoading());
  } else {
    await deleteProperty(type, id).then(
      () => {
        dispatch(actions[type].deleteDataSuccess(id));
        dispatch(hideLoading());
      },
      error => {
        dispatch(actions[type].deleteDataFail(error));
        dispatch(hideLoading());
      }
    );
  }
};
