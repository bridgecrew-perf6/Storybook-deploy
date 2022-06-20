import { gql } from '@apollo/client'

export const RECOVER_PASSWORD_USUARIO = gql`
  mutation RecoveryPasswordUsuario($email: String!) {
    recoveryPasswordUsuario(data: { email: $email })
  }
`

export const GET_EMAIL_BY_TOKEN = gql`
  query GetEmailByToken($token: String!, $typeUser: String!) {
    tokens(filter: { type_user: { eq: $typeUser }, token: { eq: $token } }) {
      edges {
        z
        node {
          email
        }
      }
    }
  }
`

export const UPDATE_PASSWORD_BY_EMAIL = gql`
  mutation updateOneUsuario($email: String!, $password: String!) {
    updateManyUsuarios(
      input: {
        filter: { email: { eq: $email }, status: { is: true } }
        update: { password: $password, status: true }
      }
    ) {
      updatedCount
    }
  }
`
