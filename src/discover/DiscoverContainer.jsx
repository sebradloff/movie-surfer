import React from 'react';
import deepEquals from 'deep-equal';

import MovieApi from './movieApi';
import Spinner from '../common/spinner/Spinner';
import DiscoverMovies from './DiscoverMovies';

export default class DiscoverContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.initialState();

    this.movieApi = new MovieApi();
    this.successCallback = this.successCallback.bind(this);
    this.errorCallback = this.errorCallback.bind(this);
  }

  componentDidMount() {
    this.movieApi.discover(this.successCallback, this.errorCallback);
  }

  initialState() {
    return {
      movieData: {},
      error: null
    };
  }

  successCallback(movies) {
    this.setState({
      movieData: movies
    });
  }

  errorCallback(error) {
    this.setState({
      error
    });
  }

  render() {
    let jsx;
    if (deepEquals(this.state.movieData, {})) {
      jsx = <Spinner />;
    } else {
      const movies = this.state.movieData.results;
      jsx = <DiscoverMovies movies={movies} />;
    }
    return jsx;
  }
}
