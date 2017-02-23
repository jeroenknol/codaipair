import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import './Loading.sass'
import CircularProgress from 'material-ui/CircularProgress'

export class Loading extends PureComponent {
  static PropTypes = {
    loading: PropTypes.bool.isRequired,
  }

  render() {
    const { loading } = this.props
    if (!loading) return null

    return (
      <div className='loading'>
        <CircularProgress />
      </div>
    )
  }
}

const mapStateToProps = ({ loading }) => ({ loading })

export default connect(mapStateToProps)(Loading)
