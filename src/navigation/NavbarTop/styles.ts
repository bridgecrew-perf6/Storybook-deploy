import styled from 'styled-components'

export const Wrapper = styled.div``

export const BoxShadow = styled.div`
  padding: 10px;
  /*
  box-shadow: 0px 6px 24px 0px rgba(108, 110, 134, 0.15);
  */
`

export const ListUl = styled.ul`
  margin: 0px;
`
export const ListLi = styled.li`
  color: ${(props) => props.theme.colors.secondary};
  cursor: pointer;
`

export const TitlePage = styled.li`
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.sizes.xxxxlarge}px;
`

export const Description = styled.li`
  display: inline;
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.sizes.large}px;
`
