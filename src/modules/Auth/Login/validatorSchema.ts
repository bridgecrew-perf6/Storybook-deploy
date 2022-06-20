import * as yup from 'yup'
import { ptForm } from 'yup-locale-pt'
yup.setLocale(ptForm)

export const validatorSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).max(18).required()
})
