import styled from 'styled-components'

export const BoxThemeToogle = styled.div`
  position: absolute;
  z-index: 9999;
  color: ${(props) => props.theme.colors.textDefault};
  background-color: ${(props) => props.theme.colors.secondary};
  right: 30px;
  bottom: 100px;
  width: 40px;
  height: 40px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`
