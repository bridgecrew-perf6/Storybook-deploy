import styled, { css } from 'styled-components'

interface Props {
  isActive?: boolean
}
export const Wrapper = styled.div``

export const ListService = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
`

export const ListServiceItem = styled.li<Props>`
  cursor: pointer;
  padding: 10px;
  margin: 20px;
  border: 1px solid ${(props) => props.theme.colors.grey};
  border-radius: 10px;
  min-width: 180px;
  max-width: 180px;
  min-height: 250px;
  max-height: 250px;
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

export const ListServiceBtn = styled.li`
  min-width: 180px;
  max-width: 180px;
  min-height: 250px;
  max-height: 250px;
  padding-top: 100px;
`
