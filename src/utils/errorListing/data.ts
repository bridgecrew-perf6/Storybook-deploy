import { Props } from './interface'

export const listErrors: Props[] = [
  {
    name: 'jwt expired',
    translatePtBr: 'Token Expirado, realizar novo login.'
  },
  {
    name: 'jwt malformed',
    translatePtBr: 'JWT Formato incorreto'
  },
  {
    name: 'secret or public key must be provided',
    translatePtBr: 'JWT chave pública secreta deve ser fornecida'
  },
  {
    name: 'JWT_TOKEN_SECRET',
    translatePtBr: 'Ambiente WEB sem parâmetro Token Secreto definido.'
  }
]
