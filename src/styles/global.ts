import { createGlobalStyle } from 'styled-components'


const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #__next {
    height: 100%;
    overflow-x: hidden;
    background-color: ${(props) => props.theme.colors.background};
  }

  body {
    font-family: 'Poppins', sans-serif;
  }

  button {
    background-color: transparent;
    border: none;
  }
  a {
    color: ${(props) => props.theme.colors.primary};
    &:hover, &:focus, &:active {
      color: ${(props) => props.theme.colors.primary};
      cursor: pointer;
      text-decoration: none;
    }
  }

  .bg-default {
    background-color: ${(props) => props.theme.colors.background};
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .react-trello-lane {
    border: 0;
    background-color: ${(props) => props.theme.colors.white};
  }
  .d-none {
    display: none!important;
  }
  .li-item {
    list-style-type: none;
    padding: 8px 18px;
    border-radius: 10px;
    cursor: pointer;
    border: 2px solid ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.white};
    font-weight: 500;
  }
  .li-item-active {
    list-style-type: none;
    padding: 8px 18px;
    border-radius: 10px;
    border: 2px solid ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.primary};
    font-weight: 500;
  }
  /**
  * CUSTOM BOOSTRAP - FORM
  */
  .invalidForm  {
    border-color: ${(props) => props.theme.colors.danger}!important;
    div {
      border-color: ${(props) => props.theme.colors.danger}!important;
    }
  }

  .successForm  {
    border-color: ${(props) => props.theme.colors.success}!important;
    border-width: 2px!important;
    div {
      border-color: ${(props) => props.theme.colors.success}!important;
      border-width: 2px!important;
    }
  }
  /**
  * CUSTOM BOOSTRAP - BTN
  */
   .btn-primary, .btn-primary:visited, .btn-primary:hover, .btn-primary:active  {
    color: ${(props) => props.theme.colors.textWithBackground}!important;
    background-color: ${(props) => props.theme.colors.primary}!important;
    border-color: ${(props) => props.theme.colors.primary}!important;
  }
  .btn-primary:hover, .btn-primary:active {
    opacity: 0.8;
  }
`

export default GlobalStyles
