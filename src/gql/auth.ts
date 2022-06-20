import { gql } from '@apollo/client'

export const GET_CLIENTES = gql`
  query clientes {
    clientes {
      edges {
        node {
          id
          nome
          email
        }
      }
    }
  }
`

export const GET_USUARIOS = gql`
  query usuarios {
    usuarios {
      edges {
        node {
          id
          nome
          email
          celular
        }
      }
    }
  }
`
