import React from 'react';

const propTypes = {
  movies: React.PropTypes.array.isRequired
};

const DiscoverMovies = ({ movies }) => {
  return (
    <div>
      {movies.map((movie) => {
        return (<div key={movie.id}>{movie.original_title}</div>);
      })
      }
    </div>
  );
};

DiscoverMovies.propTypes = propTypes;
export default DiscoverMovies;
