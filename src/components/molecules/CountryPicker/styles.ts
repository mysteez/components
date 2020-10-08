import styled from 'styled-components'
import { slateGray, smallFontSize } from '../../../globalStyles/constants'

export const CountryPicker = styled.div`
  line-height: 0;
  cursor: pointer;
`

export const CountryPickerFlag = styled.img`
  display: inline-block;
  vertical-align: middle;
`

export const CountryPickerLabel = styled.span`
  text-transform: uppercase;
  text-decoration: underline;
  font-size: ${smallFontSize};
  color: ${slateGray};
  display: inline-block;
  text-align: center;
  margin-left: 5px;
  line-height: 0;
`
