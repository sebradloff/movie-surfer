import React from 'react';

import Review from './Review';

const propTypes = {
  reviews: React.PropTypes.array.isRequired
};

const Reviews = ({ reviews }) => {
  return (
    <div id="reviews">
      <div className="ui blue ribbon label">Reviews</div>
      {reviews.map((review) => {
        return <Review key={review.id} info={review} />;
      })}
    </div>
  );
};

Reviews.propTypes = propTypes;
export default Reviews;
