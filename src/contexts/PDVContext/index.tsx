import { createContext, useState } from 'react'
import { Props, TypeProps } from './interface'

export const PDVContext = createContext({} as Props)

export function PDVProvider({ children }: any) {
  const [stepName, setStepName] = useState<string>('Senha')
  const [order, setOrder] = useState<TypeProps[]>([])
  const [payment, setPayment] = useState<[]>([])
  const [user, setUser] = useState(null)

  async function handleStep(step: string) {
    setStepName(step)
  }

  async function handleOrder(cart: TypeProps[]) {
    setOrder(cart)
  }

  async function handleUser(dataUser: any) {
    setUser(dataUser)
  }

  async function handlePayment(dataPayment: any) {
    setPayment(dataPayment)
  }

  return (
    <PDVContext.Provider
      value={{
        stepName,
        user,
        order,
        payment,
        handleStep,
        handleOrder,
        handleUser,
        handlePayment
      }}
    >
      {children}
    </PDVContext.Provider>
  )
}
