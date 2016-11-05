import fetchJSON from './fetchWrapper';
import logger from '../utils/logger';

class MovieApi {

  discover(successCallback, failureCallback, nextPage = 1) {
    fetchJSON(`${document.location.origin}/api/v2/discover/${nextPage}`, {
      method: 'GET'
    })
    .then(movies => {
      successCallback(movies);
    })
    .catch(error => {
      failureCallback();
      logger('error', 'Error occurred while fetching discovery movies', error);
    });
  }

  searchMovie(successCallback, failureCallback, searchQuery) {
    fetchJSON(`${document.location.origin}/api/v1/movies?query=${searchQuery}`, {
      method: 'GET'
    })
    .then(results => {
      successCallback(results);
    })
    .catch(error => {
      failureCallback(error);
      logger('error', `Error occurred while fetching search results for '${searchQuery}'`, error);
    });
  }

  movie(successCallback, failureCallback, movieID) {
    fetchJSON(`${document.location.origin}/api/v1/movies/${movieID}`, {
      method: 'GET'
    })
    .then(movie => {
      successCallback(movie);
    })
    .catch(error => {
      failureCallback();
      logger('error', `Error occurred while fetching movie ${movieID}`, error);
    });
  }

  movieReviews(successCallback, failureCallback, movieID) {
    fetchJSON(`${document.location.origin}/api/v1/movies/${movieID}/reviews`, {
      method: 'GET'
    })
    .then(movie => {
      successCallback(movie);
    })
    .catch(error => {
      failureCallback();
      logger('error', `Error occurred while fetching movie ${movieID}`, error);
    });
  }
}

export default MovieApi;
