import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import store, { history } from './store'

import App from './App'
import SignUp from './users/signUp'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={SignUp} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
