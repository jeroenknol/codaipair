import React, { PureComponent, PropTypes } from 'react'

class Title extends PureComponent {
  static PropTypes = {
    content: PropTypes.string.isRequired,
  }

  render() {
    return(
      <h1>{ this.props.content }</h1>
    )
  }
}

export default Title
