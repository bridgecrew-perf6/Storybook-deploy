export interface StepProps {
  step: string
}

export interface Props {
  order: TypeProps[]
  stepName: string
  user: any
  payment: any
  handleStep: (data: string) => Promise<void>
  handleUser: (data: any) => Promise<void>
  handleOrder: (data: TypeProps[]) => Promise<void>
  handlePayment: (data: any) => Promise<void>
}

export interface TypeProps {
  name: string
  image: string
  type: string
  item?: ServiceProps
}

export interface ServiceProps {
  name: string
  image: string
  code: string
  data?: string
}
