import React from 'react';
import Rating from './Rating';
import MovieInfo from './MovieInfo';
import ReviewsContainer from './review/ReviewsContainer';

const propTypes = {
  info: React.PropTypes.object.isRequired,
  movieId: React.PropTypes.string.isRequired
};

const DetailedMovieCard = ({ info, movieId }) => {
  return (
    <div id="detailed-movie-card" className="ui padded grid">
      <div className="six wide column">
        <div id="left-side">
          <h1 className="ui header">{info.original_title}</h1>
          <Rating rating={info.vote_average} />
          <img alt={`${info.original_title} poster`} src={`https://image.tmdb.org/t/p/w342${info.poster_path}`}></img>
          <div className="tagline">{info.tagline}</div>
        </div>
      </div>
      <div id="right-side" className="ten wide column">
        <MovieInfo info={info} />
        <ReviewsContainer movieId={movieId} />
      </div>
    </div>
  );
};

DetailedMovieCard.propTypes = propTypes;
export default DetailedMovieCard;
