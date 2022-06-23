import styled, { css } from 'styled-components'
import { CssProps } from './interface'

export const Text = styled.text<CssProps>`
  ${({ size, weight, color }) => {

    return css`
      display: block;
      color: ${(props) =>
        props.theme.colors[
          color as unknown as keyof typeof props.theme.colors
        ]};
      font-weight: ${weight};
      font-size: ${(props) =>
        props.theme.sizes[size as unknown as keyof typeof props.theme.sizes]}px;
    `
  }}
`
