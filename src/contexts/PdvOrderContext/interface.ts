import { PasswordNameType, StatusType, StepNameType } from './interfaceTypes'

export interface Props {
  order: OrderProps
  step: StepNameType
  handleStep: (data: StepNameType) => Promise<void>
  handleOrder: (data: OrderProps) => Promise<void>
}

export interface OrderProps {
  senha?: ModulePasswordProps
  identificacao?: ModuleIdentificationProps
  servicos?: ModuleServicesProps[]
  confirmacao?: ModuleConfirmationProps
  pagamento?: ModulePaymentProps
  recibo?: ModuleReceiptProps
}

export interface ModulePasswordProps {
  tipoAtendimento: PasswordNameType
  horarioEmissaoTicket: string
  horarioInicioAtendimento: string
  nomeFila: string
  senha: number
  status: StatusType
}

export interface ModuleIdentificationProps {
  id: number
  nome: string
  cpf: string
  status: StatusType
}

export interface ModuleServicesProps {
  status: StatusType
}

export interface ModuleConfirmationProps {
  status: StatusType
}

export interface ModulePaymentProps {
  status: StatusType
}

export interface ModuleReceiptProps {
  status: StatusType
}
