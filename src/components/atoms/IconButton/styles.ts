import styled from 'styled-components'
import { theme } from '../../../globalStyles/constants'

export const Wrapper = styled.div<{
  size: number
  primaryColor?: string
  secondaryColor?: string
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  cursor: pointer;
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
  svg {
    display: block;
    fill: ${(props) =>
      props.primaryColor ? props.primaryColor : theme.icon.primary.color};
  }
  &:hover {
    svg {
      fill: ${(props) =>
        props.secondaryColor
          ? props.secondaryColor
          : theme.icon.secondary.color};
    }
  }
`
