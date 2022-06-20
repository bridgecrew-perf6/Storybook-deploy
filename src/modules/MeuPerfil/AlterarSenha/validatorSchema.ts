import * as yup from 'yup'
import { ptForm } from 'yup-locale-pt'
yup.setLocale(ptForm)

export const validatorSchema = yup.object().shape({
  password: yup.string().required(),
  oldPassword: yup.string().min(6).required(),
  passwordConfirm: yup.string().min(6).required()
})
