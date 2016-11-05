import React from 'react';
import Rating from './Rating';
import MovieInfo from './MovieInfo';

const propTypes = {
  info: React.PropTypes.object.isRequired
};

const DetailedMovieCard = ({ info }) => {
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
      </div>
    </div>
  );
};

DetailedMovieCard.propTypes = propTypes;
export default DetailedMovieCard;
