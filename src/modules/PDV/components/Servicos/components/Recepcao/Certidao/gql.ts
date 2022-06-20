import { gql } from '@apollo/client'

export const GET_DIVISOR_CUSTAS = gql`
  query divisorCustas {
    divisorCustas {
      edges {
        node {
          id
          descricao
        }
      }
    }
  }
`
