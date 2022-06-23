import { useMutation } from '@apollo/client'
import { yupResolver } from '@hookform/resolvers/yup'
import Alert from 'components/Alert'
import Button from 'components/Button'
import Input from 'components/Forms/Input'
import Text from 'components/Text'
import { AuthContext } from 'contexts/AuthContext'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { LOGIN_USUARIO } from './gql'
import { Props } from './interface'
import { validatorSchema } from './validatorSchema'
import { useRouter } from 'next/router'
import getTranslateError from 'utils/errorListing'

const Login = () => {
  const router = useRouter()

  const [errorMessageQuery, setErrorMessageQuery] = useState<string>('')
  const { signIn, destroySection } = useContext(AuthContext)

  destroySection()

  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validatorSchema),
    reValidateMode: 'onChange'
  })
  const [loginUsuario, { data, loading, error }] = useMutation(LOGIN_USUARIO)

  useEffect(() => {
    if (router.query && router.query?.errorName?.length !== 0) {
      const errorName: string | string[] = router.query?.errorName || ''
      setErrorMessageQuery(errorName.toString())
    }
  }, [errorMessageQuery, router.query])

  useEffect(() => {
    if (data) signIn(data?.loginUsuario)
  }, [data, signIn])

  const handleData = async (formData: Props) => {
    try {
      setErrorMessageQuery('')
      await loginUsuario({ variables: formData })
    } catch (err) {
      console.log(err)
    }
  }

  console.log(errors)
  return (
    <>
      <Text
        label="Por favor, digite suas credencias para prosseguir."
        weight={300}
        size={'small'}
        color="textDefault"
        className="mb-4"
      />
      {Object.keys(errors).length !== 0 && (
        <Alert label="Campos obrigatórios" variant="danger" />
      )}
      {Object.keys(errors).length === 0 && error && (
        <Alert label={error.message} variant="danger" />
      )}
      {errorMessageQuery.length !== 0 &&
        errorMessageQuery &&
        getTranslateError(errorMessageQuery).length !== 0 && (
          <Alert
            label={getTranslateError(errorMessageQuery)}
            variant="danger"
          />
        )}
      <Form onSubmit={handleSubmit(handleData)}>
        <Input
          control={control}
          error={errors.email?.message}
          name="email"
          type="email"
          label="E-mail"
          placeholder="Insira seu e-mail"
        />
        <Input
          control={control}
          error={errors.password?.message}
          name="password"
          type="password"
          label="Senha"
          placeholder="Insira sua senha"
        />
        <Button
          id="btn-login"
          className="mt-4"
          label="Acessar"
          variant="primary"
          type="submit"
          loading={loading}
          block={true}
        />
      </Form>
      <Link href="/auth/forgot">
        <a>
          <Text
            label="Esqueceu sua senha?"
            weight={300}
            size={'small'}
            color="textLink"
            className="mt-4 text-center"
          />
        </a>
      </Link>
    </>
  )
}
export default Login
