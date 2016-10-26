import React from 'react';
import { Link } from 'react-router';


const PageNotFound = () => {
  return (
    <div id="page-not-found-container" className="ui one column centered grid">
      <div className="ui negative ten wide column message">
        <h2 className="ui header">SORRY, but you can't catch that wave!</h2>
        <h3 className="ui header"><Link to="/">Trying going home dude!</Link></h3>
      </div>
    </div>
  );
};

export default PageNotFound;
