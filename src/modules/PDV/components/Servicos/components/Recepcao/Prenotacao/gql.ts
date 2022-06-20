import { gql } from '@apollo/client'

export const GET_PROTOCOLO_TIPO_DOCUMENTOS = gql`
  query prenotacaoTipoDocumentos {
    prenotacaoTipoDocumentos {
      edges {
        node {
          id
          descricao
          numero
          prazo_validade
          prazo_devolucao
        }
      }
    }
  }
`

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

export const GET_SERVICOS = gql`
  query servicos {
    servicos {
      edges {
        node {
          id
          descricao
        }
      }
    }
  }
`

export const GET_PROTOCOLO_TIPO_DOCUMENTOS_BY_ID = gql`
  query prenotacaoTipoDocumento($id: ID!) {
    prenotacaoTipoDocumento(id: $id) {
      id
      descricao
      numero
      prazo_validade
      prazo_devolucao
    }
  }
`
