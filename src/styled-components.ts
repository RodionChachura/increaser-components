import * as styledComponents from 'styled-components'

import { Theme } from './constants/theme'

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<Theme>

export { css, createGlobalStyle, keyframes }
export default styled