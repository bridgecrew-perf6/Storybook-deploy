import styled from 'styled-components'

export const Container = styled.div`
  padding: 0px;
  min-width: 240px;
  background-color: ${(props) => props.theme.colors.white};
  border-right: 1px solid ${(props) => props.theme.gray['gray-300']};
  text-align: left;
  height: 100vmax;
  margin-left: 70px;
  box-shadow: 0px 6px 24px 0px rgb(108 110 134 / 15%);
  /* scrollbar width */
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background: #eee;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 1rem;
    background-color: #89a1c3;
  }
`

export const Div = styled.div``

export const Title = styled.text`
  color: ${(props) => props.theme.colors.primary};
  font-style: normal;
  line-height: 14px;
  padding: 0px 10px 0px 10px;
  font-size: ${(props) => props.theme.sizes.small}px;
  font-weight: 600;
`

export const TitleHeader = styled.text`
  color: ${(props) => props.theme.colors.grey};
  text-transform: uppercase;
  font-style: normal;
  line-height: 22px;
  padding: 0px 10px 0px 10px;
  font-size: ${(props) => props.theme.sizes.large}px;
  font-weight: 700;
`

export const Menu = styled.a`
  color: ${(props) => props.theme.gray['gray-600']};
  line-height: 40px;
  padding: 8px 12px;
  &:hover {
    border-radius: 10px;
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.secondary};
    text-decoration: none;
    border-left: 4px solid ${(props) => props.theme.colors.primary};
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`

export const MenuIcon = styled.div`
  vertical-align: middle;
  display: inline;
  font-size: 16px;
`

export const MenuText = styled.text`
  padding-left: 6px;
  color: ${(props) => props.theme.gray['gray-700']};
  display: inline;
  font-size: 14px;
`

export const Line = styled.div`
  display: block;
`
export const Divider = styled.div`
  margin: 20px 0px 20px 0px;
  border-top: 0.5px solid ${(props) => props.theme.gray['gray-300']};
  height: 0.5px;
  width: 100%;
`
