import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import Main from '../components/Main.js';
import Home from '../components/Home.js';
import PromptContainer from '../containers/PromptContainer.js';
import ConfirmBattleContainer from '../containers/ConfirmBattleContainer.js';

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='restaurantOne' header="1st Place" component={PromptContainer} />
      <Route path='restaurantTwo/:restaurantOne' header="2nd Place" component={PromptContainer} />
      <Route path='battle' component={ConfirmBattleContainer} />
    </Route>
  </Router>
)

export default routes;
