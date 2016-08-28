import React from 'react';
import deepEquals from 'deep-equal';

import MovieApi from './movieApi';
import Spinner from '../common/spinner/Spinner';
import DiscoverMovies from './DiscoverMovies';
import Navigator from '../common/navigation/Navigator';

export default class DiscoverContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.initialState();

    this.movieApi = new MovieApi();
    this.successCallback = this.successCallback.bind(this);
    this.errorCallback = this.errorCallback.bind(this);
    this.discoverMoreOnClick = this.discoverMoreOnClick.bind(this);
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

  discoverMoreOnClick(event) {
    let nextPage = 1;
    const currentPage = this.state.movieData.page;
    if (event.target.id === 'right-arrow') {
      nextPage = currentPage + 1;
    } else if (event.target.id === 'left-arrow' && currentPage !== 1) {
      nextPage = currentPage - 1;
    }

    this.setState({ movieData: {} });
    this.movieApi.discover(this.successCallback, this.errorCallback, nextPage);
  }

  render() {
    let jsx;
    if (deepEquals(this.state.movieData, {})) {
      jsx = <Spinner />;
    } else {
      const movies = this.state.movieData.results;
      const currentPage = this.state.movieData.page;
      jsx = (
        <div>
          <Navigator onClick={this.discoverMoreOnClick} currentPage={currentPage} />
          <DiscoverMovies movies={movies} />
        </div>
      );
    }
    return jsx;
  }
}
