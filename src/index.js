import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './App';
import DiscoverContainer from './discover/DiscoverContainer';
import DetailedMovieCardContainer from './movie/DetailedMovieCardContainer';
import PageNotFound from './common/pageNotFound/PageNotFound';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={DiscoverContainer} />
      <Route path="/movies/:id" component={DetailedMovieCardContainer} />
      <Route path="*" component={PageNotFound} />
    </Route>
  </Router>
), document.getElementById('App'));
