import styled from 'styled-components'
// import theme from '../../styles/theme'

export const List = styled.ul`
  list-style-type: none;
  position: relative;
  overflow-y: auto;
  max-height: 550px;
  padding-right: 20px;
  &:before {
    content: ' ';
    background: #d4d9df;
    display: inline-block;
    position: absolute;
    left: 29px;
    width: 2px;
    height: 100%;
    z-index: 400;
  }
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
export const Item = styled.li`
  margin: 20px 0;
  padding-left: 60px;
  &:before {
    content: ' ';
    background: white;
    display: inline-block;
    position: absolute;
    border-radius: 50%;
    border: 4px solid #22c0e8;
    left: 20px;
    width: 20px;
    height: 20px;
    z-index: 400;
  }
`
