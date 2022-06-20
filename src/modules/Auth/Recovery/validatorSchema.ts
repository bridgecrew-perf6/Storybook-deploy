import * as yup from 'yup'
import { ptForm } from 'yup-locale-pt'
yup.setLocale(ptForm)

export const validatorSchema = yup.object().shape({
  password: yup
    .string()
    .min(6, 'Deve conter 6 caracteres')
    .max(10, 'Máximo 10 caracteres')
    .required('A senha é obrigatória'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password'), null], 'As senhas devem ser iguais')
})
