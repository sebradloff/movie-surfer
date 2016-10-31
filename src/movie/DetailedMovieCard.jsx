import React from 'react';
import Rating from './Rating';

const propTypes = {
  info: React.PropTypes.object.isRequired
};

const DetailedMovieCard = ({ info }) => {
  return (
    <div className="eight wide column">
      <div className="movie-card">
        <h1 className="ui header">{info.original_title}</h1>
        <img alt={`${info.original_title} poster`} src={`https://image.tmdb.org/t/p/w342${info.poster_path}`}></img>
        <Rating rating={info.vote_average} />
        <div>{info.overview}</div>
      </div>
    </div>
  );
};

DetailedMovieCard.propTypes = propTypes;
export default DetailedMovieCard;
