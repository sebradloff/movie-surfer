import fetch from 'isomorphic-fetch';
import HTTPStatus from 'http-status';

const checkStatus = (response) => {
  if (response.status !== HTTPStatus.OK) {
    throw new Error(response.statusText);
  } else {
    return response.json();
  }
};

const checkJSON = (response) => {
  const movieApiErrorResponse = response.status_message;
  if (movieApiErrorResponse) {
    throw new Error(movieApiErrorResponse);
  } else {
    return response;
  }
};

export default function fetchJSON(url, options) {
  return fetch(url, options)
    .then(checkStatus)
    .then(checkJSON);
}
