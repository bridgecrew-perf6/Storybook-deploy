import * as yup from 'yup'
import { ptForm } from 'yup-locale-pt'
yup.setLocale(ptForm)

export const validatorSchema = yup.object().shape({
  nome: yup.string().required(),
  email: yup.string().email().required(),
  telefone: yup
    .string()
    .min(14, 'Preencha o telefone formato correto')
    .max(14, 'Preencha o telefone formato correto')
    .required(),
  celular: yup
    .string()
    .min(15, 'Preencha o celular formato correto')
    .max(15, 'Preencha o celular formato correto')
    .required(),
  rg: yup.string().required(),
  cpf: yup.string().min(14).max(14).required()
})
