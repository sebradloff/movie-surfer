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
      logger('error', 'Error occurred while fetching discovery movies', error);
      failureCallback();
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
      logger('error', `Error occurred while fetching search results for '${searchQuery}'`, error);
      failureCallback(error);
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
      logger('error', `Error occurred while fetching movie ${movieID}`, error);
      failureCallback();
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
      logger('error', `Error occurred while fetching movie ${movieID}`, error);
      failureCallback();
    });
  }
}

export default MovieApi;
