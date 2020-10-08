import * as S from './styles'
import React from 'react'
import { baseFontSize, slateGray } from '../../../globalStyles/constants'

export interface IProps {
  company: string
  color?: string
  size?: string
}

export const Copyright: React.FC<IProps> = ({
  company,
  color,
  size
}: IProps) => {
  return (
    <S.Copyright color={color || slateGray} size={size || baseFontSize}>
      © {new Date().getFullYear()} {company}
    </S.Copyright>
  )
}
