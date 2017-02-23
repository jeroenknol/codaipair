import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { history } from '../store'
import signOut from '../actions/user/sign-out'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import Group from 'material-ui/svg-icons/social/group'
import FlatButton from 'material-ui/FlatButton'

export class Navigation extends PureComponent {
  static PropTypes = {
    signedIn: PropTypes.bool.isRequired
  }

  signOut(event) {
    event.preventDefault()
    this.props.signOut()
  }

  signUp() {
    history.push('/sign-up')
  }

  goHome() {
    // REDIRECT THIS TO THE SPECIFIC USER PAGE
    if (signedIn) { history.push('/')}
    else { history.push('/') }
  }

  render() {
    const { signedIn } = this.props
    return (
      <AppBar
        title='Codaipair'
        iconElementLeft = {<IconButton onClick={this.goHome}><Group /></IconButton>}
        iconElementRight = {signedIn ?
          <FlatButton label="Sign out" onClick={this.signOut.bind(this)} /> :
          <FlatButton label="Sign up" onClick={this.signUp} />
        }
      />
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: (!!currentUser && !!currentUser._id)
})

export default connect(mapStateToProps, { signOut })(Navigation)
