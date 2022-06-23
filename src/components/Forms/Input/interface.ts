import { Control } from 'react-hook-form'

export interface Props {
  name: string
  label: string
  placeholder: string
  control: Control
  type: string
  size?: 'lg' | 'sm'
  weight?: 300 | 500 | 700 | 800 | number
  color?: string
  className?: string
  disabled?: boolean
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
