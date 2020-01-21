import fetch from 'unfetch';

const checkStatus = response => {
  if (response.ok) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  return Promise.reject(error);
};

export default async (url, data) => {
  return fetch(url, data)
    .then(checkStatus)
    .then(r => r.json());
};
