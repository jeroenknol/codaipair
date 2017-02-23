import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

export class userHome extends PureComponent {
  render() {
    const { _id, title, summary, vegan, vegetarian, pescatarian, photo, liked, likedBy } = this.props

    return(
      
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({ currentUser })

export default connect(mapStateToProps)(RecipeItem)
