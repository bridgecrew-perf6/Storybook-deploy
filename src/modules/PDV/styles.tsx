import styled from 'styled-components'
import theme from 'styles/theme'

export const ListService = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
`

export const ListServiceItem = styled.li`
  cursor: pointer;
  padding: 20px;
  margin: 20px;
  border: 1px solid ${theme.colors.gray['gray-400']};
  border-radius: 10px;
  min-width: 220px;
  max-width: 220px;
  align-self: center;
  text-align: center;
  &:hover {
    background-color: ${theme.colors.gray['gray-100']};
    border-color: ${theme.colors.theme.primary};
  }
`
