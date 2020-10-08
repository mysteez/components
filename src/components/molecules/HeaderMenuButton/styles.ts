import styled from 'styled-components'
import {
  secondaryGray,
  slateGray,
  smallFontSize
} from '../../../globalStyles/constants'

export const HeaderMenuButton = styled.div`
  cursor: pointer;
  display: inline-flex;
  &:hover {
    span {
      color: ${secondaryGray};
    }
    svg {
      path {
        fill: ${secondaryGray};
      }
    }
  }
`

export const HeaderMenuButtonLabel = styled.span`
  text-transform: uppercase;
  font-size: ${smallFontSize};
  color: ${slateGray};
  display: flex;
  align-items: center;
  text-align: center;
  margin-right: 10px;
`
