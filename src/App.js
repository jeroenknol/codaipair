import React, { Component } from 'react'
import './App.sass'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiTheme from './assets/styles/theme'
import Navigation from './components/Navigation'
import Loading from './components/Loading'
import LoadError from './components/LoadError'

class App extends Component {
  static childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
  }

  getChildContext() {
    return { muiTheme }
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="app">
          <Navigation />
          <LoadError />
          <Loading />
          { this.props.children }
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
