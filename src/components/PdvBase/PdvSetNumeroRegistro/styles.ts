import styled from 'styled-components'
import theme from 'styles/theme'

export const Wrapper = styled.div``

export const TextChangeUser = styled.div`
  color: ${theme.colors.theme.primary};
  size: ${theme.sizes.medium}px;
  font-weight: 300;
  cursor: pointer;
  display: inline;
  margin-right: 10px;
`

export const ListUser = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: left;
`

export const ListUserItem = styled.li`
  padding: 10px 10px;
  margin: 10 0px;
  text-align: left;
`
