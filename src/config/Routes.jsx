import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Main from '../components/stateless/Main'
import Home from '../components/stateless/Home'
import PromptContainer from '../components/containers/PromptContainer'
import ConfirmFormContainer from '../components/containers/ConfirmFormContainer'
import ResultsContainer from '../components/containers/ResultsContainer'

const Routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main} >
      <IndexRoute component={Home} />
      <Route path='/playerOne' header='Player One' component={PromptContainer} />
      <Route path='/playerTwo/:playerOne' header='Player Two' component={PromptContainer} />
      <Route path='/battle' component={ConfirmFormContainer} />
      <Route path='/results' component={ResultsContainer} />
    </Route>
  </Router>
)

export default Routes
