export interface Props {
  name: string
  label: string
  placeholder: string
  type: string
  size?: string
  weight?: 300 | 500 | 700 | 800 | number
  color?: string
  className?: string
  disabled?: boolean
  register: any
  textarea?: boolean
  error?: ErrorProps
  onChange?: any
  value?: any
  mask?:
    | 'maskCPF'
    | 'maskCurrencyBRL'
    | 'maskDateBRL'
    | 'maskPostalCode'
    | 'maskPhone'
    | 'maskMobile'
}

interface ErrorProps {
  message: string
}
