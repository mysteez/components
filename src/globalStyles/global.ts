import { createGlobalStyle, css } from 'styled-components'
import openSansCSS from '../fonts/opensans.css'
import {
  baseFontFamily,
  baseFontSize,
  baseLineHeight,
  h1FontSize,
  h1LineHeight,
  h2FontSize,
  h3FontSize,
  h4FontSize
} from './constants'

export const bodyStyles = css`
  ${openSansCSS}
`

export const GlobalStyle = createGlobalStyle`
 body {
   ${bodyStyles}
   font-family: ${baseFontFamily}
   font-size: ${baseFontSize}
   font-weight: normal
   line-height: ${baseLineHeight}

   h1 {
    font-size: ${h1FontSize}
    line-height: ${h1LineHeight}
   }

   h2 {
    font-size: ${h2FontSize}
   }

   h3 {
     font-size: ${h3FontSize}
   }

   h4 {
    font-size: ${h4FontSize}
   }

 }
`
