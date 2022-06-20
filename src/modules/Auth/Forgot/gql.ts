import { gql } from '@apollo/client'

export const RECOVER_PASSWORD_USUARIO = gql`
  mutation RecoveryPasswordUsuario($email: String!) {
    recoveryPasswordUsuario(data: { email: $email })
  }
`
