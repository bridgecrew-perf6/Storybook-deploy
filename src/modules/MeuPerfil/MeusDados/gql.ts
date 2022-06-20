import { gql } from '@apollo/client'

export const GET_USER = gql`
  query Usuario($userId: ID!) {
    usuario(id: $userId) {
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

export const UPDATE_USER = gql`
  mutation UpdateOneUsuario($id: ID!, $data: UpdateUsuarioInput!) {
    updateOneUsuario(input: { id: $id, update: $data }) {
      id
      nome
      cpf
    }
  }
`
