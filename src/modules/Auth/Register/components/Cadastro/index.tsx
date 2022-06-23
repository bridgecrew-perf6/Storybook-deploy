import Button from 'components/Button'
import Input from 'components/Forms/Input'
import React, { useEffect, useCallback } from 'react'
import { Col, Form, Modal, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { ptForm } from 'yup-locale-pt'
import { Props, UserProps } from './interface'
import { validatorSchema } from './validatorSchema'
import { yupResolver } from '@hookform/resolvers/yup'
import { ADD_CUSTOMER, GET_CUSTOMER, UPDATE_CUSTOMER } from './gql'
import client from 'services/graphQL/index'
import { formatCPF, formatMobile, formatPhone } from 'utils/format'
import { useToasts } from 'react-toast-notifications'
import { useMutation } from '@apollo/client'
import { generate } from 'generate-password'

yup.setLocale(ptForm)

const Cadastro = ({
  show,
  onHide,
  isAddMode,
  userId,
  label,
  onChange
}: Props) => {
  const { addToast } = useToasts()

  const [createOneCliente] = useMutation(ADD_CUSTOMER)
  const [updateOneCliente] = useMutation(UPDATE_CUSTOMER)

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors
  } = useForm({ resolver: yupResolver(validatorSchema) })

  const getUser = useCallback(async () => {
    if (!isAddMode && userId !== null && show) {
      const graphqlQueryExpression = {
        query: GET_CUSTOMER,
        variables: {
          userId
        }
      }

      const data: any = await new Promise((resolve: any) => {
        return client.query(graphqlQueryExpression).then((response: any) => {
          return resolve(response?.data.cliente || {})
        })
      })

      const item: any = {
        nome: data.nome,
        email: data.email,
        rg: data.rg,
        cpf: formatCPF(data.cpf),
        celular: formatMobile(data.celular),
        telefone: formatPhone(data.telefone)
      }

      reset(item)
    }
  }, [isAddMode, userId, reset, show])

  const handleChange = (value: UserProps) => {
    onChange(value)
  }

  useEffect(() => {
    getUser()
  }, [getUser])

  useEffect(() => {
    if (isAddMode) {
      reset({})
      clearErrors()
    }
  }, [clearErrors, isAddMode, reset, show])

  const handleData = async (formData: any) => {
    try {
      let id: any = null
      if (isAddMode) {
        const dataUserId: string | number = await createUser(formData)
        id = dataUserId
      }

      if (!isAddMode && userId !== null && show)
        await updateUser(userId, formData)

      const dataReturn: UserProps = {
        id: userId ? userId : id,
        nome: formData.nome,
        cpf: formData.cpf
      }

      handleChange(dataReturn)
      reset()
    } catch (err) {
      console.log('ERROR: ', err)
    }
  }

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
      const firstName = e.data.updateOneCliente.nome.split(' ')
      addToast(
        `O cadastro do cliente "${firstName[0]}" foi realizado com sucesso!`,
        {
          appearance: 'success',
          autoDismiss: true
        }
      )
    })
  }

  const createUser = async (values: any) => {
    const data = {
      password: generate({
        length: 10,
        numbers: true
      }),
      obs: '-',
      status: true,
      ...values
    }

    // TODO: DEVE ENVIAR O EMAIL COM A SENHA PROVISÓRIA PARA O E-MAIL INFORMADO. VERIFICAR NECESSIDADE

    const dataResponse = await createOneCliente({
      variables: {
        data
      }
    })

    console.log('INSERIR REGISTRO', dataResponse)
    addToast('Registro incluído com sucesso!', {
      appearance: 'success',
      autoDismiss: true
    })
    return dataResponse.data.createOneCliente.id
  }

  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
    >
      <Form onSubmit={handleSubmit(handleData)}>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            {isAddMode ? 'Cadastrar' : 'Editar'} {label}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs={7}>
              <Input
                control={control}
                error={errors.nome?.message}
                name="nome"
                type="text"
                label="Nome completo"
                placeholder="Informe..."
              />
            </Col>
            <Col xs={5}>
              <Input
                control={control}
                error={errors.cpf?.message}
                name="cpf"
                type="text"
                label="CPF"
                mask="maskCPF"
                placeholder="Insira o CPF"
              />
            </Col>
          </Row>
          <Row>
            <Col xs={7}>
              <Input
                control={control}
                error={errors.email?.message}
                name="email"
                type="text"
                label="E-mail"
                placeholder="Informe..."
              />
            </Col>
            <Col xs={5}>
              <Input
                control={control}
                error={errors.rg?.message}
                name="rg"
                type="text"
                label="RG"
                placeholder="Insira o RG"
              />
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <Input
                control={control}
                error={errors.celular?.message}
                name="celular"
                type="text"
                label="Telefone Celular"
                placeholder="Informe..."
                mask="maskMobile"
              />
            </Col>
            <Col xs={6}>
              <Input
                control={control}
                error={errors.telefone?.message}
                name="telefone"
                type="text"
                label="Telefone Fixo"
                placeholder="Informe..."
                mask="maskPhone"
              />
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer
          style={{
            display: 'block',
            padding: 0,
            paddingTop: 10,
            paddingBottom: 10
          }}
        >
          <Row>
            <Col xs={4} />
            <Col xs={4}>
              <Button
                id="btn-cancel"
                label="Voltar"
                variant="info"
                type="submit"
                onClick={onHide}
                block={true}
              />
            </Col>
            <Col xs={4}>
              <Button
                id="btn-cancel"
                label={isAddMode ? 'Cadastrar' : 'Salvar Alterações'}
                variant="primary"
                type="submit"
                block={true}
              />
            </Col>
          </Row>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default Cadastro
