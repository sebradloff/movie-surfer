import React from 'react';
import SearchBar from '../../search/SearchBar';

const Header = () => {
  return (
    <div id="header" className="ui two column grid">
      <div className="row">
        <div className="three wide column"></div>
        <h1 className="ten wide column" style={{ textAlign: 'center' }}>Movie Surfer</h1>
        <div className="right floated three wide column">
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Header;
