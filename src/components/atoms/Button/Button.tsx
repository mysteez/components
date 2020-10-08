import * as S from './styles'
import React from 'react'

export interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  color?: 'primary' | 'secondary'
  fullWidth?: boolean
  period?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export const Button: React.FC<IProps> = ({
  color = 'primary',
  label,
  fullWidth = false,
  period = true,
  size = 'md',
  ...props
}: IProps) => {
  const StyledButton = color === 'primary' ? S.Primary : S.Secondary

  return (
    <StyledButton color={color} fullWidth={fullWidth} size={size} {...props}>
      <S.Text>
        {label}
        {period ? '.' : ''}
      </S.Text>
    </StyledButton>
  )
}
