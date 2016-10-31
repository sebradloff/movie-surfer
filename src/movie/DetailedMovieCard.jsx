import React from 'react';
import Rating from './Rating';

const propTypes = {
  info: React.PropTypes.object.isRequired
};

const DetailedMovieCard = ({ info }) => {
  return (
    <div className="eight wide column">
      <div id="detailed-movie-card" className="ui grid">
        <div id="left-side" className="six wide column">
          <h1 className="ui header">{info.original_title}</h1>
          <img alt={`${info.original_title} poster`} src={`https://image.tmdb.org/t/p/w342${info.poster_path}`}></img>
          <div className="tagline">{info.tagline}</div>
          <Rating rating={info.vote_average} />
        </div>
        <div id="right-side" className="ten wide column">
          <div>{info.overview}</div>
        </div>
      </div>
    </div>
  );
};

DetailedMovieCard.propTypes = propTypes;
export default DetailedMovieCard;
