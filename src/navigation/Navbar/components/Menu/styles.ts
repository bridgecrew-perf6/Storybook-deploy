import styled, { css } from 'styled-components'

interface Props {
  isActive?: boolean
}

export const Wrapper = styled.div<Props>`
  cursor: pointer;
  ${({ isActive }) => {
    if (isActive) {
      return css`
        background-color: ${(props) => props.theme.colors.secondary};
        color: ${(props) => props.theme.colors.white};
        border-radius: 23px;
      `
    }
    return css`
      color: ${(props) => props.theme.colors.secondary};
    `
  }}
  margin: 12px 12px;
  width: 46px;
  height: 46px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.white};
    border-color: transparent;
    border-radius: 23px;
  }
`
