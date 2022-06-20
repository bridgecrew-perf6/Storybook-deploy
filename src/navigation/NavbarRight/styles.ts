import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 20px 0 0 0;
  min-width: 320px;
  background-color: ${(props) => props.theme.colors.white}!important;
  border-left: 3px solid ${(props) => props.theme.gray['gray-300']};
  text-align: left;
  height: 100vmax;
`

export const SectionTitle = styled.div`
  height: 88px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  cursor: pointer;
`

export const Icon = styled.div`
  color: ${(props) => props.theme.colors.primary};
`
