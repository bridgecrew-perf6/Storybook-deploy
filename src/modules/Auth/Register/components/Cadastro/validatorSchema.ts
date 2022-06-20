import * as yup from 'yup'
import { ptForm } from 'yup-locale-pt'
yup.setLocale(ptForm)

export const validatorSchema = yup.object().shape({
  showAddress: yup.boolean(),
  nome: yup.string().min(3).max(180).required(),
  cpf: yup.string().min(14).max(14).required(),
  email: yup.string().email().required(),
  rg: yup.string().required(),
  telefone: yup.string().min(14).max(14).required(),
  celular: yup.string().min(15).max(15).required()
})

export const validatorSchemaAddress = yup.object().shape({
  postalCode: yup.string().min(9).max(9).required(),
  endereco: yup.string().min(3).max(180).required(),
  numero: yup.string().required(),
  bairro: yup.string().required(),
  complemento: yup.string(),
  cidade: yup.string().required(),
  uf: yup.string().min(2).max(2).required()
})
