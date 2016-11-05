import React from 'react';
import ReleaseDate from './ReleaseDate';

const propTypes = {
  info: React.PropTypes.object.isRequired
};

const MovieInfo = ({ info }) => {
  return (
    <div className="movie-info">
      <div className="ui blue ribbon label">Movie Info</div>
      <ReleaseDate date={info.release_date} />
      <div>{info.overview}</div>
    </div>
  );
};

MovieInfo.propTypes = propTypes;
export default MovieInfo;
