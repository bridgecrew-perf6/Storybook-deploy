import styled from 'styled-components'

export const BoxResumeFinance = styled.div`
  background-color: ${(props) => props.theme.colors.grey};
  padding: 10px;
  border-radius: 8px;
`

export const LinePayments = styled.div`
  .row {
    .delete-line-payment {
      display: none !important;
    }
    &:hover {
      .delete-line-payment {
        cursor: pointer;
        display: inline-block !important;
      }
    }
  }
`
