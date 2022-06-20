/* eslint-disable prettier/prettier */
import { ReactNode } from 'react';

export interface Props {
  children?: ReactNode
}

export interface NavigationProps {
  title: string
  active: boolean
  children: NavbarChildrenProps[]
  icon: any
}

export interface NavbarChildrenProps {
  title: string
  children: NavigationSubChildren[]
}

export interface NavigationSubChildren {
  title: string
  url: string
}
