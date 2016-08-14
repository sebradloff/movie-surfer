import React from 'react';
import MovieCard from '../movie/MovieCard';

const propTypes = {
  movies: React.PropTypes.array.isRequired
};

const DiscoverMovies = ({ movies }) => {
  return (
    <div className="ui padded stackable centered grid">
      {movies.map((movie) => {
        return <MovieCard key={movie.id} info={movie} />;
      })
      }
    </div>
  );
};

DiscoverMovies.propTypes = propTypes;
export default DiscoverMovies;
