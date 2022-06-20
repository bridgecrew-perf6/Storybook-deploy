// eslint-disable-next-line prettier/prettier
import { StatusType, StepNameType } from 'contexts/PdvOrderContext/interfaceTypes';
import { ReactNode } from 'react'
export interface StepsProps {
  name: StepNameType
  component?: ReactNode
  icon?: ReactNode
  status: StatusType
}

export interface Props {
  showNavigation: boolean
  permitedNavigation: boolean
  steps: StepsProps[]
}
