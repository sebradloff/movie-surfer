import React from 'react';

import classNames from 'classnames';

const propTypes = {
  classes: React.PropTypes.string.isRequired
};

const Star = ({ classes }) => {
  const classesToRender = classNames({ [`${classes}`]: true }, 'rating');
  return (
    <svg
      className={classesToRender}
      width="30px"
      height="28px"
      viewBox="0 0 300 275"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
    >
      <polygon
        stroke="#605a00"
        strokeWidth="15"
        points="150,25  179,111 269,111 197,165 223,251  150,200 77,251  103,165 31,111 121,111"
      />
    </svg>
  );
};

Star.propTypes = propTypes;
export default Star;
