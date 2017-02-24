import mui from 'material-ui'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

// Colors
const eggplant     = '#49274A'
const grape        = '#94618E'
const sand         = '#F4DECB'
const shell        = '#F8EEE7'
const white        = '#ffffff'
const darkGrey     = '#3d3d3d'
const grape50      = 'rgba(148, 97, 142, 0.5)'

// Palette
export const palette = {
  primary1Color: eggplant,
  primary2Color: sand,
  primary3Color: sand,
  accent1Color: grape,
  textColor: darkGrey,
  alternateTextColor: white,
  canvasColor: white,
  borderColor: grape,
  disabledColor: grape50
}

export default getMuiTheme({ palette })
