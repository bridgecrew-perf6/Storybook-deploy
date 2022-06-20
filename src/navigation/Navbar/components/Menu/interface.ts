// eslint-disable-next-line prettier/prettier
import { ReactChild } from 'react';

export interface Props {
  title: string
  isActive: boolean
  children?: ReactChild
}
