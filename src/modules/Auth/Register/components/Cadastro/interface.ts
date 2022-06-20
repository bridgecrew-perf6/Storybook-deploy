export interface Props {
  show: boolean
  onHide: any
  isAddMode: boolean
  userId: number | null
  label: string
  onChange?: any
}

export interface UserProps {
  id?: number
  nome?: string
  email?: string
  cpf?: string
  rg?: string
  celular?: string
  telefone?: string
}
