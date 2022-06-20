export interface Props {
  menuData: MenuDataProps[]
  onChange(data: MenuDataProps): void
}

export interface MenuDataProps {
  title: string
  icon: any
  active: boolean
  children: PropsChildren[]
}

export interface PropsChildren {
  title: string
  children: PropsSubChildren[]
}

export interface PropsSubChildren {
  title: string
  url: string
}
