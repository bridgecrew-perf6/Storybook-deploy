import Select from 'components/Forms/Select'
import React, { useState, useEffect, useCallback } from 'react'
import { Form, Col, Row } from 'react-bootstrap'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { validatorSchema } from './validatorSchema'
import { useQuery } from '@apollo/client'
import {
  GET_DIVISOR_CUSTAS,
  GET_PROTOCOLO_TIPO_DOCUMENTOS,
  GET_PROTOCOLO_TIPO_DOCUMENTOS_BY_ID
} from './gql'
import * as S from './styles'
import PdvSearchBy from 'components/Pdv/PdvSearchBy'
import Register from 'modules/Auth/Register'
import Input from 'components/Forms/Input'
import { add, format } from 'date-fns'
import client from 'services/graphQL/index'
import Button from 'components/Button'
import PdvConnectedWith from 'components/Pdv/PdvConnectedWith'

const RecepacaoRecepcao: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false)

  const [outorgante, setOutorgante] = useState<string>('')
  const [outorgado, setOutorgado] = useState<string>('')

  const methods = useForm({
    resolver: yupResolver(validatorSchema)
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    reset
  } = methods

  const dateA = add(new Date(), { days: 30 })
  const dateB = add(new Date(), { days: 15 })

  const [prenotacaoTipoDocumentoId, setPrenotacaoTipoDocumentoId] =
    useState<number>(0)

  const [prazoEntrega, setPrazoEntrega] = useState<string>(
    format(dateA, 'dd/M/yyyy').toString()
  )
  const [prazoDevolucao, setPrazoDevolucao] = useState<string>(
    format(dateB, 'dd/M/yyyy').toString()
  )

  const { data: dataDivisorCustas } = useQuery(GET_DIVISOR_CUSTAS)
  const { data: dataTipoDocumentos } = useQuery(GET_PROTOCOLO_TIPO_DOCUMENTOS)

  const getProtocoloById = useCallback(async () => {
    if (prenotacaoTipoDocumentoId !== undefined) {
      const graphqlQueryExpression = {
        query: GET_PROTOCOLO_TIPO_DOCUMENTOS_BY_ID,
        variables: {
          id: prenotacaoTipoDocumentoId
        }
      }

      const data: any = await new Promise((resolve: any) => {
        return client.query(graphqlQueryExpression).then((response: any) => {
          return resolve(response?.data.prenotacaoTipoDocumento || {})
        })
      })

      const dateA = add(new Date(), { days: data.prazo_devolucao })
      const dateB = add(new Date(), { days: data.prazo_validade })

      setPrazoDevolucao(format(dateA, 'dd/M/yyyy').toString())
      setPrazoEntrega(format(dateB, 'dd/M/yyyy').toString())
    }
  }, [prenotacaoTipoDocumentoId])

  useEffect(() => {
    getProtocoloById()
  }, [getProtocoloById])

  const handleData = async (formData: any) => {
    try {
      setLoading(true)
      console.log('SUBMIT_FORM', formData)
      clearErrors()
      reset()
      setLoading(false)
    } catch (err) {
      console.log('ERROR: ', err)
    }
  }

  return (
    <S.Wrapper>
      <FormProvider {...methods}>
        <Form onSubmit={handleSubmit(handleData)}>
          <Row className="d-flex align-items-end">
            <Col xs={6}>
              <Select
                name="tipo"
                label="Tipo"
                options={dataTipoDocumentos?.prenotacaoTipoDocumentos?.edges?.map(
                  (i: any) => ({
                    label: `${i.node.numero} - ${i.node.descricao}`,
                    value: i.node.id
                  })
                )}
                defaultValue={{
                  value: '1',
                  label: '1 - Instrumento particular'
                }}
                onChange={(val: any) => {
                  setPrenotacaoTipoDocumentoId(val?.value)
                }}
                isInvalid={errors?.tipo}
              />
            </Col>
            <Col xs={6}>
              <Select
                name="custas"
                label="Custas"
                options={dataDivisorCustas?.divisorCustas?.edges?.map(
                  (i: any) => ({
                    label: i.node.descricao,
                    value: i.node.id
                  })
                )}
                defaultValue={{
                  value: '1',
                  label: '1/3 do valor da Tabela'
                }}
                isInvalid={errors?.custas}
              />
            </Col>
          </Row>
          <Row className="d-flex align-items-end">
            <Col xs={6}>
              <Input
                register={register}
                type="hidden"
                label=""
                placeholder={'...'}
                name={'outorgante'}
                error={errors.outorgante?.message}
                value={outorgante}
              />
              <Register
                label={'Outorgante'}
                changeUser={(user: any) => setOutorgante(user.id)}
              />
            </Col>
            <Col xs={6}>
              <Input
                register={register}
                type="hidden"
                label=""
                placeholder={'...'}
                name={'outorgado'}
                error={errors.outorgado?.message}
                value={outorgado}
              />
              <Register
                label={'Outorgado'}
                changeUser={(user: any) => user && setOutorgado(user.id)}
              />
            </Col>
          </Row>
          <Row className="d-flex align-items-end">
            <Col xs={3}>
              <Input
                register={register}
                type="text"
                label="Prenotação"
                placeholder={'...'}
                name="prenotacao"
                error={errors.prenotacao?.message}
              />
            </Col>
            <Col xs={3}>
              <Input
                register={register}
                type="text"
                label="Protocolo ARISP"
                placeholder={'...'}
                name="protocoloArisp"
                error={errors.protocoloArisp?.message}
              />
            </Col>
            <Col xs={3}>
              <Input
                register={register}
                type="text"
                label="Prazo para devolucao"
                placeholder={'...'}
                name="prazoDevolucao"
                mask="maskDateBRL"
                error={errors.prazoDevolucao?.message}
                value={prazoDevolucao ? prazoDevolucao : null}
              />
            </Col>
            <Col xs={3}>
              <Input
                register={register}
                type="text"
                label="Prazo para entrega"
                placeholder={'...'}
                name="prazoEntrega"
                error={errors.prazoEntrega?.message}
                mask="maskDateBRL"
                value={prazoEntrega ? prazoEntrega : null}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <PdvConnectedWith />
            </Col>
          </Row>
          <Row className="d-flex align-items-end">
            <Col xs={12} className="pr-4 pt-5 mb-5">
              <PdvSearchBy type="Prenotação" />
            </Col>
          </Row>
          <Row className="d-flex align-items-end">
            <Col />
            <Col xs={2}>
              <Button
                id="add-service"
                label="Limpar"
                variant="secondary"
                onClick={() => {
                  reset()
                  clearErrors()
                }}
                block
              />
            </Col>
            <Col xs={3}>
              <Button
                id="btn-submit"
                label="Adicionar"
                variant="primary"
                type="submit"
                loading={loading}
                block
              />
            </Col>
          </Row>
        </Form>
      </FormProvider>
    </S.Wrapper>
  )
}

export default RecepacaoRecepcao
