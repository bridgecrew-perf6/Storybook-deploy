export interface Props {
  menuData: MenuDataProps[]
  title: string
}

export interface MenuDataProps {
  title: string
  children: ChildrenSubProps[]
}

export interface ChildrenSubProps {
  title: string
  url: string
}
