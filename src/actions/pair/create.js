import API from '../../middleware/api'
import loadError from '../load/error'
import loadSuccess from '../load/success'
import loading from '../loading'
import {history} from '../../store'

const api = new API()
const pair = api.service('pairs')

export default () => {
  return (dispatch) => {
    dispatch(loading(true))
    // authenticate
    api.app.authenticate()
    // then => create pair in database
    .then(() => {
      pair.create({})
      // then => success!
      .then((response) => {
        dispatch(loadSuccess())
        })
    })
    // catch => display the error
    .catch((error) => {
      dispatch(loadError(error))
    })
    // then => clean up loading spinner
    .then(() => {
      dispatch(loading(false))
    })
  }
}
