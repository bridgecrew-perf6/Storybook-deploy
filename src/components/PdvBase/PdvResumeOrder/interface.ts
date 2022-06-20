export interface Props {
  titleNextStep: string
  titleBackStep: string
  handleStep: any
  prices: PriceProps
}

export interface PriceProps {
  descontos: number
}
