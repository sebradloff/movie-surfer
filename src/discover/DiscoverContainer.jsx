import React from 'react';

import MovieApi from '../api/movieApi';
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
      isLoading: true,
      movieData: {},
      error: false
    };
  }

  successCallback(movies) {
    this.setState({
      isLoading: false,
      movieData: movies,
      error: false
    });
  }

  errorCallback(error) {
    this.setState({
      isLoading: false,
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

    this.setState({ isLoading: true, movieData: {} });
    this.movieApi.discover(this.successCallback, this.errorCallback, nextPage);
  }

  render() {
    const { movieData, error, isLoading } = this.state;
    let jsx;
    if (error) {
      jsx = <div>Sorry but we got some problems to fix!</div>;
    } else if (isLoading) {
      jsx = <Spinner />;
    } else {
      const movies = movieData.results;
      const currentPage = movieData.page;
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
