import React from 'react';
import { browserHistory } from 'react-router';
import { Search } from 'semantic-ui-react';

import MovieApi from '../api/movieApi';

export default class SearchBar extends React.Component {

  constructor(props) {
    super(props);

    this.movieApi = new MovieApi();
    this.successCallback = this.successCallback.bind(this);
    this.failureCallback = this.failureCallback.bind(this);
    this.searchForMovie = this.searchForMovie.bind(this);
    this.resultRenderer = this.resultRenderer.bind(this);
    this.onResultSelection = this.onResultSelection.bind(this);
  }

  componentWillMount() {
    this.resetComponent();
  }

  onResultSelection(event) {
    const movieId = event.target.dataset.id;
    browserHistory.push(`/movies/${movieId}`);
    this.resetComponent();
  }

  searchForMovie(e, searchValue) {
    this.setState({ isLoading: true, value: searchValue });

    this.movieApi.searchMovie(this.successCallback, this.failureCallback, searchValue);
  }

  resultRenderer({ title, value }) {
    return (<div data-id={value}>{title}</div>);
  }

  resetComponent() {
    this.setState({ isLoading: false, results: [], value: '' });
  }

  successCallback(apiResults) {
    const firstEightMovies = apiResults.results.slice(0, 8);
    const results = firstEightMovies.map((movie) => {
      return { title: movie.title, value: movie.id, childKey: movie.id };
    });
    this.setState({ isLoading: false, results });
  }

  failureCallback() {
    this.setState({ isLoading: false, results: [] });
  }

  render() {
    const { isLoading, value, results } = this.state;

    return (
      <Search
        aligned="right"
        loading={isLoading}
        onSearchChange={this.searchForMovie}
        onChange={this.onResultSelection}
        results={results}
        resultRenderer={this.resultRenderer}
        value={value}
        {...this.props}
      />
    );
  }
}
