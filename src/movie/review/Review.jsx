import React from 'react';

class Review extends React.Component {
  constructor(props) {
    super(props);

    this.seeMoreClicked = this.seeMoreClicked.bind(this);
    this.state = { reviewJsx: this.setInitialReviewText() };
  }

  setInitialReviewText() {
    const reviewText = this.props.info.content;
    let reviewJsx;

    if (reviewText.length > 250) {
      const truncatedText = reviewText.slice(0, 250);
      reviewJsx = (<div>{truncatedText}... <a onClick={this.seeMoreClicked}>See More</a></div>);
    } else {
      reviewJsx = (<div>{reviewText}</div>);
    }
    return reviewJsx;
  }

  seeMoreClicked() {
    this.setState({ reviewJsx: (<div>{this.props.info.content}</div>) });
  }

  render() {
    const { author } = this.props.info.author;
    const { reviewJsx } = this.state;
    return (
      <div className="review">
        <div className="ui orange ribbon label">Review by: {author}</div>
        {reviewJsx}
      </div>
    );
  }
}

const propTypes = {
  info: React.PropTypes.object.isRequired
};

Review.propTypes = propTypes;
export default Review;
