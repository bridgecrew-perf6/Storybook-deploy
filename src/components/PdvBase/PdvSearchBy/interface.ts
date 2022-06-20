export interface Props {
  type: 'Certidão' | 'Prenotação' | 'Exame e Cálculo'
}

export interface ItemProps {
  tipo: string
  numero?: number | null
  vias: number
  dataNome: NomeProps[]
  dataEndereco: EnderecoProps[]
  dataRegistro: RegistroProps[]
}

export interface BaseProps {
  data: ItemProps[]
  totalVias?: number
}

export interface NomeProps {
  tipoProprietario: string
  proprietario: string
  rg: string
  cpf: string
  inscricaoEstadual: string
  cnpj: string
  vias: string | number
}

export interface EnderecoProps {
  tipoEndereco?: string
  cep?: string
  tipoLogradrouro?: string
  endereco?: string
  numero?: string
  complemento?: string
  edificio?: string
  conjunto?: string
  escritorio?: string
  loja?: string
  apartamento?: string
  bloco?: string
  vaga?: string
  loteamento?: string
  quadra?: string
  lote?: string
  bairro?: string
  cidade?: string
  uf?: string
}

export interface RegistroProps {
  numero: string
  vias: string | number
}
