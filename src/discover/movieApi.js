import fetch from 'isomorphic-fetch';

class MovieApi {

  discover(successCallback, failureCallback) {
    fetch('/api/discover', {
      method: 'GET'
    })
    .then(response => {
      return response.json();
    })
    .then(movies => {
      successCallback(movies);
    })
    .catch(error => {
      console.error('Error occurred while fetching leads', error);
      failureCallback(error);
    });
  }
}

export default MovieApi;
