import { gql } from '@apollo/client'

export const GET_MATRICULAS = gql`
  query matricula($id: ID!) {
    data: matricula(id: $id) {
      id
      numero
    }
  }
`

export const GET_TRANSCRICAO = gql`
  query transcricao($id: ID!) {
    data: transcricao(id: $id) {
      id
      numero
    }
  }
`

export const GET_LIVRO_CGI = gql`
  query livroCgi($id: ID!) {
    data: livroCgi(id: $id) {
      id
      numero
    }
  }
`

export const GET_LIVRO_3 = gql`
  query livro3($id: ID!) {
    data: livro3(id: $id) {
      id
      numero
    }
  }
`

export const GET_INSCRICAO = gql`
  query inscricao($id: ID!) {
    data: inscricao(id: $id) {
      id
      numero
    }
  }
`

export const GET_PRENOTACAO = gql`
  query prenotacao($id: ID!) {
    data: prenotacao(id: $id) {
      id
      numero
    }
  }
`

export const GET_EXAME_CALCULO = gql`
  query exameCalculo($id: ID!) {
    data: exameCalculo(id: $id) {
      id
      numero
    }
  }
`
