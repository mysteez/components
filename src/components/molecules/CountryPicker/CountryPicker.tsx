import * as S from './styles'
import React from 'react'
import { countries } from '../../../i18n/countries'

type CountryName = keyof typeof countries

export interface IProps {
  name: CountryName
}

// TODO: Make into a dropdown selector

export const CountryPicker: React.FC<IProps> = ({ name }: IProps) => {
  const country = countries[name]
  return (
    <S.CountryPicker>
      <S.CountryPickerFlag src={country.image} />
      <S.CountryPickerLabel>{country.title}</S.CountryPickerLabel>
    </S.CountryPicker>
  )
}
