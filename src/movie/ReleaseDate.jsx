import React from 'react';
import moment from 'moment';

const propTypes = {
  date: React.PropTypes.string.isRequired
};

const MOVIE_API_DATE_FORMAT = 'YYYY-MM-DD';
const DISPLAY_DATE = 'dddd, MMMM Do YYYY';

const ReleaseDate = ({ date }) => {
  return (
    <div className="date-released">
      <strong>Date Released: </strong>{moment(date, MOVIE_API_DATE_FORMAT).format(DISPLAY_DATE)}
    </div>
  );
};

ReleaseDate.propTypes = propTypes;
export default ReleaseDate;
