import * as S from './styles'
import React from 'react'
import { IconButton } from '../../atoms/IconButton/IconButton'

export const HeaderMenuButton: React.FC = () => {
  return (
    <S.HeaderMenuButton>
      <S.HeaderMenuButtonLabel>Menu</S.HeaderMenuButtonLabel>
      <IconButton name='hamburger' size={24} />
    </S.HeaderMenuButton>
  )
}
