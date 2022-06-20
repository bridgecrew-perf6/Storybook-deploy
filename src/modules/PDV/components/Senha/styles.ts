import styled, { css } from 'styled-components'

interface Props {
  isActive?: boolean
}

export const Wrapper = styled.div`
  color: ${(props) => props.theme.colors.primary};
`
export const ListService = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  flex-wrap: wrap;
`

export const ListServiceItem = styled.li<Props>`
  cursor: pointer;
  padding: 20px;
  margin: 20px;
  color: ${(props) => props.theme.colors.primary};
  border: 1px solid ${(props) => props.theme.colors.grey};
  border-radius: 10px;
  min-width: 220px;
  max-width: 220px;
  align-self: center;
  text-align: center;
  ${({ isActive }) => {
    if (isActive) {
      return css`
        background-color: ${(props) => props.theme.colors.grey};
        border-color: ${(props) => props.theme.colors.primary};
        border-width: 4px;
      `
    }
    return css`
      &:hover {
        background-color: ${(props) => props.theme.colors.grey};
        border-color: ${(props) => props.theme.colors.primary};
      }
    `
  }}
`
