import React from 'react';
import positiveStar from './positive-star.svg';
import negativeStar from './negative-star.svg';

const MAX_NUM_OF_STARS = 10;

const propTypes = {
  rating: React.PropTypes.number.isRequired
};

const createStars = (numOfStars) => {
  let positiveStars = numOfStars;
  let negativeStars = MAX_NUM_OF_STARS - positiveStars;
  const stars = [];
  while (positiveStars > 0) {
    stars.push(<img alt="stars" src={positiveStar} />);
    positiveStars--;
  }
  while (negativeStars > 0) {
    stars.push(<img alt="stars" src={negativeStar} />);
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
