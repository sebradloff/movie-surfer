import request from 'request-promise';

class MovieApi {

  discover() {
    const options = {
      uri: '/api/discover',
      json: true
    };

    return request.get(options)
      .then(response => {
        return response;
      })
      .catch(failure => {
        return failure;
      });
  }
}

export default MovieApi;
