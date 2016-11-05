import React from 'react';

import MovieApi from '../api/movieApi';
import Spinner from '../common/spinner/Spinner';
import DetailedMovieCard from './DetailedMovieCard';

const PropTypes = {
  params: React.PropTypes.object.isRequired
};

class DetailedMovieCardContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.initialState();

    this.movieApi = new MovieApi();
    this.successCallback = this.successCallback.bind(this);
    this.errorCallback = this.errorCallback.bind(this);
    this.newMovieSelected = this.newMovieSelected.bind(this);
  }

  componentDidMount() {
    this.newMovieSelected();
  }

  componentDidUpdate() {
    const newMovieSelected = this.props.params.id !== this.state.movieId;
    if (newMovieSelected) {
      this.newMovieSelected();
    }
  }

  newMovieSelected() {
    const movieID = this.props.params.id;
    this.movieApi.movie(this.successCallback, this.errorCallback, movieID);
  }

  initialState() {
    return {
      isLoading: true,
      movieData: {},
      error: false,
      movieId: this.props.params.id
    };
  }

  successCallback(movie) {
    this.setState({
      isLoading: false,
      movieData: movie,
      error: false,
      movieId: this.props.params.id
    });
  }

  errorCallback() {
    this.setState({
      isLoading: false,
      error: true
    });
  }

  render() {
    const { movieData, error, isLoading, movieId } = this.state;
    let jsx;
    if (error) {
      jsx = <div>Sorry but we got some problems to fix!</div>;
    } else if (isLoading) {
      jsx = <Spinner />;
    } else {
      jsx = (
        <DetailedMovieCard info={movieData} movieId={movieId} />
      );
    }
    return jsx;
  }
}

DetailedMovieCardContainer.propTypes = PropTypes;
export default DetailedMovieCardContainer;
