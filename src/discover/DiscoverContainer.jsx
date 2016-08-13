import React from 'react';
import deepEquals from 'deep-equal';

import MovieApi from './movieApi';
import Spinner from '../common/spinner/Spinner';

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
    if (deepEquals(this.state.movieData, {})) {
      return <Spinner />;
    }
    return (
      <div>Discover page</div>
    );
  }
}
