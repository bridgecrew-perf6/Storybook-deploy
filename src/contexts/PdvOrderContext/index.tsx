import { createContext, useState } from 'react'
import { OrderProps, Props } from './interface'
import { StepNameType } from './interfaceTypes'

export const PdvOrderContext = createContext({} as Props)

export function PdvOrderProvider({ children }: any) {
  const [step, setStep] = useState<StepNameType>('Senha')
  const [order, setOrder] = useState<OrderProps>({})

  async function handleStep(data: StepNameType) {
    setStep(data)
  }

  async function handleOrder(data: OrderProps) {
    setOrder(data)
  }

  return (
    <PdvOrderContext.Provider
      value={{
        step,
        order,
        handleStep,
        handleOrder
      }}
    >
      {children}
    </PdvOrderContext.Provider>
  )
}
