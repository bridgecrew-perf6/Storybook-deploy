import { useMutation } from '@apollo/client'
import { yupResolver } from '@hookform/resolvers/yup'
import Alert from 'components/Alert'
import Button from 'components/Button'
import Input from 'components/Forms/Input'
import Text from 'components/Text'
import { AuthContext } from 'contexts/AuthContext'
import Link from 'next/link'
import React, { useState, useContext } from 'react'
import { Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { RECOVER_PASSWORD_USUARIO } from './gql'
import { Props } from './interface'
import { validatorSchema } from './validatorSchema'

const Forgot = () => {
  const { destroySection } = useContext(AuthContext)

  const [successForm, setSuccessForm] = useState<boolean>(false)

  const [recoveryPasswordUsuario, { loading, error }] = useMutation(
    RECOVER_PASSWORD_USUARIO
  )

  destroySection()

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validatorSchema)
  })

  const handleData = async (formData: Props) => {
    setSuccessForm(false)
    try {
      if (await recoveryPasswordUsuario({ variables: formData })) {
        setSuccessForm(true)
        reset()
      }
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <>
      <Text
        className="pb-2"
        label="Recuperar senha"
        weight={800}
        size={'xxxlarge'}
        color="primary"
      />
      <Text
        label="Por favor, insira seu e-mail abaixo."
        weight={300}
        size={'small'}
        color="textDefault"
        className="mb-4"
      />
      {successForm && (
        <Alert
          label="Solicitação de recuperação de senha realizada com sucesso. Favor verificar seu e-mail."
          variant="success"
        />
      )}
      {Object.keys(errors).length !== 0 && (
        <Alert label="Campos obrigatório" variant="danger" />
      )}
      {Object.keys(errors).length === 0 && error && (
        <Alert label={error.message} variant="danger" />
      )}
      <Form onSubmit={handleSubmit(handleData)}>
        <Input
          register={register}
          error={errors.email?.message}
          name="email"
          type="email"
          label="E-mail"
          placeholder="Insira seu e-mail"
        />
        <Button
          id="btn-login"
          className="mt-4"
          label="Recuperar Senha"
          variant="primary"
          type="submit"
          loading={loading}
          block={true}
        />
      </Form>
      <Link href="/auth/login">
        <a>
          <Text
            label="Deseja voltar?"
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
export default Forgot
