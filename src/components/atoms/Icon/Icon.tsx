import * as S from './styles'
import React from 'react'
import { icons } from './Icons'

type IconName = keyof typeof icons

export interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: number
  name: IconName
  color?: string
}

export const Icon: React.FC<IProps> = ({ size = 32, name, color }: IProps) => {
  const icon = icons[name]
  return (
    <S.Icon height={size} viewBox={icon.viewbox} width={size} color={color}>
      {icon && icon.paths.map((path, index) => <path d={path.d} key={index} />)}
    </S.Icon>
  )
}
