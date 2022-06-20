export interface Props {
  size?: string
  weight?: 300 | 500 | 700 | 800 | number
  label: string
  color?: string
  className?: string
}

export interface CssProps {
  size: string
  weight: number
  color: string
}
