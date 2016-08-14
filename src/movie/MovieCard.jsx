import React from 'react';
import Rating from './Rating';

const propTypes = {
  info: React.PropTypes.object.isRequired
};

const MovieCard = ({ info }) => {
  return (
    <div className="six wide column">
      <h1 className="ui header">{info.original_title}</h1>
      <img alt={`${info.original_title} poster`} src={`http://image.tmdb.org/t/p/w342${info.poster_path}`}></img>
      <Rating rating={info.vote_average} />
      <div>{info.overview}</div>
    </div>
  );
};

MovieCard.propTypes = propTypes;
export default MovieCard;