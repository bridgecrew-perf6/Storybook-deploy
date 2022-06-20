import styled from 'styled-components'

export const Wrapper = styled.div`
  border-top: 1px solid ${(props) => props.theme.colors.grey};
  border-bottom: 1px solid ${(props) => props.theme.colors.grey};
  padding: 20px 0;
`

export const TextChangeUser = styled.div`
  color: ${(props) => props.theme.colors.primary};
  size: ${(props) => props.theme.sizes.medium}px;
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
