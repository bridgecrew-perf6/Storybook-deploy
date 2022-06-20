import { gql } from '@apollo/client'

export const GET_CUSTOMERS_SEARCH_BY_CPF = gql`
  query clientes($search: String!) {
    clientes(filter: { cpf: { like: $search } }) {
      edges {
        node {
          id
          nome
          cpf
        }
      }
    }
  }
`

export const GET_CUSTOMERS_SEARCH_BY_NOME = gql`
  query clientes($search: String!) {
    clientes(filter: { nome: { like: $search } }) {
      edges {
        node {
          id
          nome
          cpf
        }
      }
    }
  }
`
