import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import createDay from '../actions/pair/create'

export class sandBox extends PureComponent {
  handleClick(e) {
    e.preventDefault()
    this.props.createDay()
  }

  render() {
    const { _id, name, email, admin } = this.props.currentUser

    console.log('ID: ', _id)
    console.log('Name: ', name)
    console.log('Email: ', email)
    console.log('Admin: ', admin)
    // console.log(this.props)

    return(
      <div>
        <h1>Hello there, { name }</h1>
        <RaisedButton label="Create a day object" primary={true}
            onClick={this.handleClick.bind(this)} />
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({ currentUser })

export default connect(mapStateToProps, { createDay })(sandBox)
