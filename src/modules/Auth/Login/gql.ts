import { gql } from '@apollo/client'

export const LOGIN_USUARIO = gql`
  mutation LoginUsuario($email: String!, $password: String!) {
    loginUsuario(data: { email: $email, password: $password }) {
      token
    }
  }
`
