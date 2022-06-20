import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
`

export const ListUl = styled.ul``
export const ListLi = styled.li`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 24px;
  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`
export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  height: 100%;
`

export const Header = styled.div`
  align-self: flex-start;
  width: 100%;
  height: 40px;
`

export const Content = styled.div`
  display: flex;
  width: 100%;
  height: calc(100% - 60px);
  margin-top: 26px;
`

export const Main = styled.div`
  display: flex;
  min-width: 70%;
`

export const Sidebar = styled.div`
  padding: 0px 20px 0px 20px;
  width: 30%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`

export const SidebarHeader = styled.div`
  align-self: flex-start;
  width: 100%;
`

export const SidebarFooter = styled.div`
  align-self: flex-end;
  width: 100%;
`
