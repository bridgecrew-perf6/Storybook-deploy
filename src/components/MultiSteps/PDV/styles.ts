import styled, { css } from 'styled-components'

interface Props {
  isActive?: boolean
  enableCursor?: boolean
}

export const Wrapper = styled.div`
  width: 100%;
`
export const Step = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
`

export const StepItem = styled.li<Props>`
  padding: 10px 20px;
  margin: 10px;
  text-align: center;
  ${({ enableCursor }) => {
    if (enableCursor) {
      return css`
        cursor: pointer;
      `
    }
  }}
`

export const StepDivider = styled.li<Props>`
  position: relative;
  margin: 10px 0 4px 0;
  right: 10%;
  min-width: 120%;
  ${({ isActive }) => {
    if (isActive) {
      return css`
        border-bottom: 4px solid ${(props) => props.theme.colors.primary};
      `
    }
    return css`
      border-bottom: 4px solid ${(props) => props.theme.colors.grey};
    `
  }}
`

export const Content = styled.div`
  margin: 20px 0px;
  padding: 10px 0px;
  border-top: 1px solid ${(props) => props.theme.colors.grey};
`
