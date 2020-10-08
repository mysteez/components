import * as S from './styles'
import React from 'react'
import { countries } from '../../../i18n/countries'

type Name = keyof typeof countries

export interface IProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  name: Name
  size?: number
  color?: string
}

export const Flag: React.FC<IProps> = ({ name, ...props }: IProps) => {
  const country = countries[name]
  return <S.Flag {...props} src={country.image} />
}
