import { StatusType } from 'contexts/PdvOrderContext/interfaceTypes'
import { ReactNode } from 'react'

export interface Props {
  steps: ItemProps[]
}

export interface ItemProps {
  name: string
  component: ReactNode
  icon: ReactNode
  status: StatusType
}
