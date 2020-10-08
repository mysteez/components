import styled from 'styled-components'
import * as C from '../../../globalStyles/constants'

export const Primary = styled.button<{
  color: 'primary' | 'secondary'
  fullWidth: boolean
  size: 'sm' | 'md' | 'lg'
}>`
  outline: none;
  cursor: pointer;
  border: none;
  width: ${(props) =>
    props.fullWidth
      ? '100%'
      : () => {
          switch (props.size) {
            case 'sm':
              return '90px'
              break
            case 'md':
              return '150px'
              break
            case 'lg':
              return '200px'
              break
            default:
              return '150px'
          }
        }};
  height: ${(props) => {
    switch (props.size) {
      case 'sm':
        return '22px'
        break
      case 'md':
        return '50px'
        break
      case 'lg':
        return '70px'
        break
      default:
        return '50px'
    }
  }};
  background-color: ${C.theme.button.colors.primary.background};
  transition: ${C.theme.button.animation.transition};
  box-shadow: -3px 3px 11px 0px grey;
  &:hover {
    opacity: 0.6;
  }
  span {
    font-size: ${(props) => (props.size === 'sm' ? '14px' : '16px')};
  }
`

export const Secondary = styled(Primary)`
  background-color: ${C.theme.button.colors.secondary.background};
`

export const Text = styled.span`
  color: ${C.white};
`
