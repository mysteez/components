import * as S from './styles'
import React from 'react'
// eslint-disable-next-line no-unused-vars
import { Icon, IProps as IIProps } from '../Icon/Icon'

export interface IProps extends IIProps {
  primaryColor?: string
  secondaryColor?: string
  onClick?: () => void
}

export const IconButton: React.FC<IProps> = ({
  size = 32,
  primaryColor,
  secondaryColor,
  name,
  onClick
}: IProps) => {
  return (
    <S.Wrapper
      size={size}
      primaryColor={primaryColor}
      secondaryColor={secondaryColor}
      onClick={onClick}
    >
      <Icon name={name} size={size} color={primaryColor} />
    </S.Wrapper>
  )
}
