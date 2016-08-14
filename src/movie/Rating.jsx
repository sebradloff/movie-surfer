import React from 'react';

const Star = require('./rating-star.svg');

const MAX_NUM_OF_STARS = 10;

const propTypes = {
  rating: React.PropTypes.number.isRequired
};

const createStars = (numOfStars) => {
  let positiveStars = numOfStars;
  let negativeStars = MAX_NUM_OF_STARS - positiveStars;
  const stars = [];
  while (positiveStars > 0) {
    stars.push(<Star key={`${positiveStars} positive`} className="positive-star" />);
    positiveStars--;
  }
  while (negativeStars > 0) {
    stars.push(<Star key={`${negativeStars} negative`} className="negative-star" />);
    negativeStars--;
  }
  return stars;
};

const Rating = ({ rating }) => {
  const stars = parseInt(rating, 10);
  return (
    <div className="rating">
      {createStars(stars)}
    </div>
  );
};

Rating.propTypes = propTypes;
export default Rating;
