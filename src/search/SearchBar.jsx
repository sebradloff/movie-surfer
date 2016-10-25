import React from 'react';
import { Search } from 'semantic-ui-react';

import MovieApi from '../discover/movieApi';

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
    const results = apiResults.results.map((movie) => {
      return { title: movie.title, id: movie.id };
    });
    this.setState({ isLoading: false, results });
  }

  failureCallback(error) {
    console.log('shit');
  }

  searchForMovie(e, searchValue) {
    this.setState({ isLoading: true, value: searchValue });

    this.movieApi.searchMovie(this.successCallback, this.failureCallback, searchValue);
  }

  resultRenderer({ title, id }) {
    const key = Math.round(10000 * Math.random());
    return (<div value={id} key={key}>{title}</div>);
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
