import * as S from './styles'
import React from 'react'

export interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: 'primary' | 'secondary'
  label: string
  fullWidth: boolean
  period: boolean
  size: 'sm' | 'md' | 'lg'
}

export const Button: React.FC<IProps> = ({
  color = 'primary',
  label,
  fullWidth,
  period = true,
  size = 'md'
}: IProps) => {
  const StyledButton = color === 'primary' ? S.Primary : S.Secondary

  return (
    <StyledButton color={color} fullWidth={fullWidth} size={size}>
      <S.Text>
        {label}
        {period ? '.' : ''}
      </S.Text>
    </StyledButton>
  )
}
