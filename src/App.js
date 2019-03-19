// @flow

import React, { Component } from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import history from './services/history'
import Home from './components/common/Home'
import ErrorPage from './components/common/ErrorPage'

type Props = {}

class App extends Component<Props> {
  render() {
    return (
      <Router history={history}>
        <div>
          <Switch>
            <Route exact path="/" render={ () => <Redirect to="/home" />}/>
            <Route path="/home" component={ Home } />
            <Route path="/error" component={ErrorPage} />
            <Redirect to="/error" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
