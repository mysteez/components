import styled from 'styled-components'
import { theme } from '../../../globalStyles/constants'

export const Icon = styled.svg<{
  color?: string
}>`
  fill: ${(props) => (props.color ? props.color : theme.icon.primary.color)};
`
