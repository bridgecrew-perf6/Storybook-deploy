import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  background-color: ${(props) => props.theme.colors.backgroundNavbar};
  text-align: center;
  min-height: 100vh;
  padding-top: 20px;
  z-index: 1000;
`
export const Logo = styled.div`
  padding: 20px 0px;
`

export const ListWrapper = styled.ul`
  list-style-type: none;
`

export const ListItem = styled.li`
  margin: 4px 0px;
`

export const FooterMenu = styled.div`
  position: fixed;
  bottom: 0;

  padding-bottom: 20px;
`
