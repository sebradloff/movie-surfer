import React from 'react';

import Review from './Review';

const propTypes = {
  reviews: React.PropTypes.array.isRequired
};

const Reviews = ({ reviews }) => {
  let reviewsJsx;
  if (reviews.length !== 0) {
    reviewsJsx = reviews.map((review) => {
      return <Review key={review.id} info={review} />;
    });
  } else {
    reviewsJsx = (<div className="ui negative message">
      <h2 className="ui header">SORRY, but there are no reviews for this movie yet!</h2>
    </div>);
  }
  return (
    <div id="reviews">
      <div className="ui blue ribbon label">Reviews</div>
      {reviewsJsx}
    </div>
  );
};

Reviews.propTypes = propTypes;
export default Reviews;
