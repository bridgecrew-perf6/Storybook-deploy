export interface Props {
  id: number
  idFather: number
  base: 'Certidão' | 'Prenotação'
  tipo: string
  upTicket: any
  downTicket: any
  permitedDown: boolean
}
