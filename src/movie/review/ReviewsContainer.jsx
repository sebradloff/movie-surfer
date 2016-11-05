import React from 'react';

import Reviews from './Reviews';
import Spinner from '../../common/spinner/Spinner';

import MovieApi from '../../api/movieApi';

const PropTypes = {
  movieId: React.PropTypes.string.isRequired
};

class ReviewsContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.initialState();

    this.movieApi = new MovieApi();
    this.successCallback = this.successCallback.bind(this);
    this.errorCallback = this.errorCallback.bind(this);
  }

  componentDidMount() {
    const movieId = this.props.movieId;
    this.movieApi.movieReviews(this.successCallback, this.failureCallback, movieId);
  }

  successCallback(reviews) {
    this.setState({
      isLoading: false,
      error: false,
      reviews: reviews.results
    });
  }

  initialState() {
    return {
      isLoading: true,
      error: false,
      reviews: []
    };
  }

  errorCallback() {
    this.setState({
      isLoading: false,
      error: true
    });
  }

  render() {
    const { reviews, error, isLoading } = this.state;
    let jsx;
    if (error) {
      jsx = <div>Sorry but we got some problems to fix!</div>;
    } else if (isLoading) {
      jsx = <Spinner />;
    } else {
      jsx = <Reviews reviews={reviews} />;
    }
    return jsx;
  }
}

ReviewsContainer.propTypes = PropTypes;
export default ReviewsContainer;
