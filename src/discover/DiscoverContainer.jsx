import React from 'react';
import MovieApi from './movieApi';

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
    return (
      <div>Discover page</div>
    );
  }
}
