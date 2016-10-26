import React from 'react';
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
  }

  componentWillMount() {
    this.resetComponent();
  }

  resetComponent() {
    this.setState({ isLoading: false, results: [], value: '' });
  }

  successCallback(apiResults) {
    const firstEightMovies = apiResults.results.slice(0, 8);
    const results = firstEightMovies.map((movie) => {
      return { title: movie.title, value: movie.id };
    });
    this.setState({ isLoading: false, results });
  }

  failureCallback() {
    this.setState({ isLoading: false, results: [] });
  }

  searchForMovie(e, searchValue) {
    this.setState({ isLoading: true, value: searchValue });

    this.movieApi.searchMovie(this.successCallback, this.failureCallback, searchValue);
  }

  resultRenderer({ title, value }) {
    return (<div><a href={`/movies/${value}`}>{title}</a></div>);
  }

  render() {
    const { isLoading, value, results } = this.state;

    return (
      <Search
        aligned="right"
        loading={isLoading}
        onSearchChange={this.searchForMovie}
        results={results}
        resultRenderer={this.resultRenderer}
        value={value}
        {...this.props}
      />
    );
  }
}
