import call from '../utils/api/call';
import { apiUrl } from '../utils/envVarMap';
import rooms from './rooms';
import hotels from './hotels';

export const getAllProperties = type => {
  if (process.env.NODE_ENV) {
    return call(`${apiUrl}/${type}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
  if (type === 'hotels') {
    return Promise.resolve(hotels);
  }
  return Promise.resolve(rooms);
};

export const getPropertyById = (type, id) => {
  return call(`${apiUrl}/${type}/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

export const setProperty = (type, action, id, payload) => {
  let url;
  let method;
  if (action === 'edit') {
    url = `${apiUrl}/${type}/${id}`;
    method = 'PUT';
  } else {
    url = `${apiUrl}/${type}`;
    method = 'POST';
  }
  return call(url, {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });
};

export const deleteProperty = (type, id) => {
  return call(`${apiUrl}/${type}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  });
};
