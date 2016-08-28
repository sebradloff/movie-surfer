import React from 'react';

const propTypes = {
  onClick: React.PropTypes.func.isRequired,
  currentPage: React.PropTypes.number.isRequired
};

const calucluateResultsRange = (pageNumber) => {
  const RESULTS_PER_PAGE = 20;
  const endRange = pageNumber * RESULTS_PER_PAGE;
  const startRange = endRange - 19;
  return `${startRange}-${endRange}`;
};

const Navigator = ({ onClick, currentPage }) => {
  return (
    <div>
      <div>
        Results {calucluateResultsRange(currentPage)}
      </div>
      <div className="ui button" id="left-arrow" onClick={onClick}>
        <i className="arrow left icon"></i>
      </div>
      <div className="ui button" id="right-arrow" onClick={onClick}>
        <i className="arrow right icon"></i>
      </div>
    </div>
  );
};

Navigator.propTypes = propTypes;
export default Navigator;
