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
  typeIn?: string[]
}
