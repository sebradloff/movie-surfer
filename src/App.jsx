import React from 'react';
import Header from './common/header/Header';

const propTypes = {
  children: React.PropTypes.element
};

const App = (props) => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        {props.children}
      </main>
    </div>
  );
};

App.propTypes = propTypes;
export default App;
