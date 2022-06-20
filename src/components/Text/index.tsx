import React from 'react'
import { Props } from './interface'
import * as S from './styles'

const Text: React.FC<Props> = ({
  size = 'medium',
  weight = 500,
  label,
  color = 'dark',
  className,
  ...rest
}) => {
  return (
    <S.Text
      {...rest}
      className={className}
      size={size}
      weight={weight}
      color={color}
    >
      {label}
    </S.Text>
  )
}

export default Text
