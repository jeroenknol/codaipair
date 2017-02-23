import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import store, { history } from './store'

import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

import App from './App'
import SignUp from './users/signUp'
import SignIn from './users/signIn'
import Sandbox from './users/sandbox'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/sandbox" component={Sandbox} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
