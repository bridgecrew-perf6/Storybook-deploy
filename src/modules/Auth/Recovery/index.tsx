import { useMutation, useQuery } from '@apollo/client'
import { yupResolver } from '@hookform/resolvers/yup'
import Alert from 'components/Alert'
import Button from 'components/Button'
import Input from 'components/Forms/Input'
import Text from 'components/Text'
import { AuthContext } from 'contexts/AuthContext'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState, useContext } from 'react'
import { Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { GET_EMAIL_BY_TOKEN, UPDATE_PASSWORD_BY_EMAIL } from './gql'
import { Props, PropsParent } from './interface'
import { validatorSchema } from './validatorSchema'

const Recovey = ({ token, typeUser }: PropsParent) => {
  const router = useRouter()
  let email = ''

  const { destroySection } = useContext(AuthContext)

  const [successForm, setSuccessForm] = useState<boolean>(false)

  destroySection()

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validatorSchema)
  })
  const [updateOneUsuario] = useMutation(UPDATE_PASSWORD_BY_EMAIL)
  const { data, loading, error } = useQuery<any>(GET_EMAIL_BY_TOKEN, {
    variables: {
      token,
      typeUser: typeUser === 'user' ? 'USUARIO' : 'CLIENTE'
    }
  })

  if (data && data.tokens.edges.length === 0) {
    router.push('/auth/login')
  } else if (data && data?.tokens.edges[0].node.email) {
    email = data?.tokens.edges[0].node.email
  }

  const handleData = async (formData: Props) => {
    setSuccessForm(false)
    try {
      setSuccessForm(true)
      await updateOneUsuario({
        variables: { email: email, password: formData.password }
      })
      reset()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    (email.length === 0 && (
      <Alert label="Aguarde, validando credenciais" variant="warning" />
    )) ||
    (email.length > 0 && (
      <>
        <Text
          className="pb-2"
          label="Revisar Acesso"
          weight={800}
          size={'xxxlarge'}
          color="primary"
        />
        <Text
          label="Por favor, digite sua nova senha e confirme"
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
        {successForm && (
          <Alert
            label="Atualização de senha realizado com sucesso!."
            variant="success"
          />
        )}
        <Form onSubmit={handleSubmit(handleData)}>
          <Input
            register={register}
            error={errors.password?.message}
            name="password"
            type="password"
            label="Senha"
            placeholder="Insira sua senha"
          />
          <Input
            register={register}
            error={errors.passwordConfirm?.message}
            name="passwordConfirm"
            type="password"
            label="Confirmar senha"
            placeholder="Confirme sua senha"
          />
          <Button
            id="btn-login"
            className="mt-4"
            label="Atualizar minha senha"
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
    ))
  )
}
export default Recovey
