import styled from 'styled-components'

export const Copyright = styled.span<{
  color: string
  size: string
}>`
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
`
