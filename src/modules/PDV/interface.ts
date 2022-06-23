import {
  StatusType,
  StepNameType
} from 'contexts/PdvOrderContext/interfaceTypes'

import { ReactNode } from 'react'

export interface Props {
  steps: ItemProps[]
}

export interface ItemProps {
  name: StepNameType
  component: ReactNode
  icon: ReactNode
  status: StatusType
}
