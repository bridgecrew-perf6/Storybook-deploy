import { gql } from '@apollo/client'

export const GET_CUSTOMER = gql`
  query Cliente($userId: ID!) {
    cliente(id: $userId) {
      id
      nome
      cpf
      rg
      email
      celular
      telefone
    }
  }
`

export const ADD_CUSTOMER = gql`
  mutation createOneCliente($data: CreateClienteInput!) {
    createOneCliente(input: { cliente: $data }) {
      id
      nome
      cpf
    }
  }
`

export const UPDATE_CUSTOMER = gql`
  mutation UpdateOneCliente($id: ID!, $data: UpdateClienteInput!) {
    updateOneCliente(input: { id: $id, update: $data }) {
      id
      nome
      cpf
    }
  }
`
