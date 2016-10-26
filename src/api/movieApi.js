import fetchJSON from './fetchWrapper';

class MovieApi {

  discover(successCallback, failureCallback, nextPage = 1) {
    fetchJSON(`/api/v2/discover/${nextPage}`, {
      method: 'GET'
    })
    .then(movies => {
      successCallback(movies);
    })
    .catch(error => {
      console.error('Error occurred while fetching leads', error);
      failureCallback();
    });
  }

  searchMovie(successCallback, failureCallback, searchQuery) {
    fetchJSON(`/api/v1/movies?query=${searchQuery}`, {
      method: 'GET'
    })
    .then(results => {
      successCallback(results);
    })
    .catch(error => {
      console.error(`Error occurred while fetching search results for ${searchQuery}`, error);
      failureCallback(error);
    });
  }
}

export default MovieApi;
