import { yupResolver } from '@hookform/resolvers/yup'
import Button from 'components/Button'
import Input from 'components/Forms/Input'
import Text from 'components/Text'
import React, { useCallback, useEffect, useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { Props } from './interface'
import { validatorSchema } from './validatorSchema'
import { GET_USER, UPDATE_USER } from './gql'
import { parseCookies } from 'nookies'
import client from 'services/graphQL/index'
import { formatCPF, formatMobile, formatPhone } from 'utils/format'
import { useMutation } from '@apollo/client'
import { useToasts } from 'react-toast-notifications'

const MeusDados = () => {
  const { addToast } = useToasts()
  const { ['tecnocart.user_id']: user_id } = parseCookies()

  const [loading, setLoading] = useState<boolean>(false)
  const [userId] = useState<number>(parseInt(user_id))

  const [updateOneCliente] = useMutation(UPDATE_USER)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({ resolver: yupResolver(validatorSchema) })

  const getUser = useCallback(async () => {
    const graphqlQueryExpression = {
      query: GET_USER,
      variables: {
        userId
      }
    }

    const data: any = await new Promise((resolve: any) => {
      return client.query(graphqlQueryExpression).then((response: any) => {
        return resolve(response?.data.usuario || {})
      })
    })

    const item: Props = {
      nome: data.nome,
      email: data.email,
      rg: data.rg,
      cpf: formatCPF(data.cpf),
      celular: formatMobile(data.celular),
      telefone: formatPhone(data.telefone)
    }

    reset()
  }, [userId, reset])

  useEffect(() => {
    getUser()
  }, [getUser])

  const updateUser = async (id: number, values: any) => {
    const data = {
      status: true,
      ...values
    }
    await updateOneCliente({
      variables: {
        id,
        data
      }
    }).then((e: any) => {
      const firstName = e.data.updateOneUsuario.nome.split(' ')
      addToast(
        `O cadastro do usuário "${firstName[0]}" foi realizado com sucesso!`,
        {
          appearance: 'success',
          autoDismiss: true
        }
      )
    })
  }

  const handleData = async (formData: Props) => {
    try {
      setLoading(true)
      await updateUser(userId, formData)
      const firstName = formData.nome.split(' ')
      addToast(
        `O cadastro do cliente "${firstName[0]}" foi atualizado com sucesso!`,
        {
          appearance: 'success',
          autoDismiss: true
        }
      )
      setLoading(false)
    } catch (err) {
      setLoading(false)
      console.log('ERROR: ', err)
    }
  }

  return (
    <>
      <Form onSubmit={handleSubmit(handleData)}>
        <Row>
          <Col>
            <Text
              className="mb-4"
              label="Mantenha seus dados cadastrais sempre atualizado."
              weight={300}
              size={'medium'}
              color="grey"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Input
              register={register}
              error={errors.nome?.message}
              name="nome"
              type="text"
              label="Nome completo"
              placeholder="Insira seu nome"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Input
              register={register}
              error={errors.email?.message}
              name="email"
              type="text"
              label="E-mail"
              placeholder="Insira seu e-mail"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Input
              register={register}
              error={errors.telefone?.message}
              name="telefone"
              type="text"
              label="Telefone"
              placeholder="Insira seu Telefone"
              mask="maskPhone"
            />
          </Col>
          <Col>
            <Input
              register={register}
              error={errors.celular?.message}
              name="celular"
              type="text"
              label="Celular"
              placeholder="Insira seu celular"
              mask="maskMobile"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Input
              register={register}
              error={errors.cpf?.message}
              name="cpf"
              type="text"
              label="CPF"
              placeholder="Insira seu cpf"
              mask="maskCPF"
            />
          </Col>
          <Col>
            <Input
              register={register}
              error={errors.rg?.message}
              name="rg"
              type="text"
              label="RG"
              placeholder="Insira seu RG"
            />
          </Col>
        </Row>
        <Row>
          <Col className="text-right mt-3">
            <Button
              id="btn-cancel"
              label={'Salvar Alterações'}
              loading={loading}
              variant="primary"
              type="submit"
            />
          </Col>
        </Row>
      </Form>
    </>
  )
}

export default MeusDados
