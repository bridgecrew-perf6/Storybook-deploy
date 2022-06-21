import Input from 'components/Forms/Input'
import Select from 'components/Forms/Select'
import React, { useState, useCallback, useEffect, useContext } from 'react'
import { Form, Col, Row } from 'react-bootstrap'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { validatorSchema } from './validatorSchema'
import * as yup from 'yup'
import { ptForm } from 'yup-locale-pt'
import { useQuery } from '@apollo/client'
import * as S from './styles'
import Button from 'components/Button'
import Text from 'components/Text'

import {
  GET_DIVISOR_CUSTAS,
  GET_PROTOCOLO_TIPO_DOCUMENTOS,
  GET_SERVICOS,
  GET_PROTOCOLO_TIPO_DOCUMENTOS_BY_ID
} from './gql'
import Register from 'modules/Auth/Register'
import { format, add } from 'date-fns'
import client from 'services/graphQL/index'
import PdvSearchBy from 'components/Pdv/PdvSearchBy'
import Alert from 'components/Alert'
import PdvConnectedWith from 'components/Pdv/PdvConnectedWith'
import { Props } from './interface'
import { PDVContext } from 'contexts/PDVContext'
import { useToasts } from 'react-toast-notifications'
yup.setLocale(ptForm)

const RecepcaoPrenotados = ({ service }: Props) => {
  const { handleStep, handleOrder, order } = useContext(PDVContext)

  const dateA = add(new Date(), { days: 15 })
  const dateB = add(new Date(), { days: 30 })

  const [outorgante, setOutorgante] = useState<string>('')
  const [outorgado, setOutorgado] = useState<string>('')

  const [prenotacaoTipoDocumentoId, setPrenotacaoTipoDocumentoId] =
    useState<number>(0)

  const [prazoRegistro, setPrazoRegistro] = useState<string>(
    format(dateA, 'dd/M/yyyy').toString()
  )
  const [prazoDevolucao, setPrazoDevolucao] = useState<string>(
    format(dateA, 'dd/M/yyyy').toString()
  )
  const [prazoValidade, setPrazoValidade] = useState<string>(
    format(dateB, 'dd/M/yyyy').toString()
  )

  const { data: dataDivisorCustas } = useQuery(GET_DIVISOR_CUSTAS)
  const { data: dataTipoDocumentos } = useQuery(GET_PROTOCOLO_TIPO_DOCUMENTOS)
  const { data: dataServicos } = useQuery(GET_SERVICOS)

  const methods = useForm({
    resolver: yupResolver(validatorSchema)
  })

  const {
    control,
    handleSubmit,
    formState: { errors },
    clearErrors,
    reset
  } = methods

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
      setPrazoRegistro(format(dateA, 'dd/M/yyyy').toString())
      setPrazoValidade(format(dateB, 'dd/M/yyyy').toString())
    }
  }, [prenotacaoTipoDocumentoId])

  useEffect(() => {
    getProtocoloById()
  }, [getProtocoloById])
  const { addToast } = useToasts()

  const handleData = async (formData: any) => {
    try {
      service.data = formData
      service.data.vias = 1 // TODO
      service.data.valorTotal = 333.45 // TODO

      console.log('prenotacaoPesquisarPor', formData.prenotacaoPesquisarPor)
      console.log(service)
      handleOrder([...order, service])
      console.log(order)
      addToast(`Serviço adicionado com suceso!`, {
        appearance: 'warning',
        autoDismiss: true
      })
      handleStep('Confirmação')
      reset()
    } catch (err) {
      console.log('ERROR: ', err)
    }
  }

  return (
    <S.Wrapper>
      <FormProvider {...methods}>
        <Form onSubmit={handleSubmit(handleData)}>
          {Object.keys(errors).length !== 0 && (
            <Row>
              <Col>
                <Alert label="Campos obrigatórios" variant="danger" />
                {console.log('Exibindo os ERROS', errors)}
              </Col>
            </Row>
          )}
          <Row>
            <Col xs={4}>
              <Select
                name="tipo"
                label="Tipo"
                defaultValue={{
                  value: '1',
                  label: '1 - Instrumento particular'
                }}
                options={dataTipoDocumentos?.prenotacaoTipoDocumentos?.edges?.map(
                  (i: any) => ({
                    label: `${i.node.numero} - ${i.node.descricao}`,
                    value: i.node.id
                  })
                )}
                isInvalid={errors?.tipo}
                onChange={(val: any) => {
                  setPrenotacaoTipoDocumentoId(val?.value)
                }}
              />
            </Col>
            <Col xs={4}>
              <Select
                name="tabela"
                label="Tabela"
                defaultValue={{
                  value: '1',
                  label: '1. Registro com valor declarado'
                }}
                options={dataServicos?.servicos?.edges?.map((i: any) => ({
                  label: i.node.descricao,
                  value: i.node.id
                }))}
                isInvalid={errors?.tabela}
              />
            </Col>
            <Col xs={4}>
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
                isInvalid={errors?.tabela}
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col xs={4}>
              <Input
                control={control}
                type="text"
                label="Protocolo ARISP"
                placeholder={'...'}
                name="protocoloArisp"
                error={errors.protocoloArisp?.message}
              />
            </Col>
            <Col xs={4}>
              <Input
                control={control}
                type="text"
                label="Protocolo Indisponibilidade"
                placeholder={'...'}
                name="protocoloIndisponibilidade"
                error={errors.protocoloIndisponibilidade?.message}
              />
            </Col>
            <Col xs={4}>
              <Select
                name="vcQuitacaoPacto"
                label="VC / Quitação / Pacto"
                options={[
                  {
                    value: 'NAO',
                    label: 'Não'
                  },
                  {
                    value: 'SIM',
                    label: 'Sim'
                  }
                ]}
                defaultValue={{
                  value: 'NAO',
                  label: 'Não'
                }}
                isInvalid={errors?.vcQuitacaoPacto}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <Input
                control={control}
                type="hidden"
                label=""
                placeholder={'...'}
                name={'outorgante'}
                error={errors.outorgante?.message}
                value={outorgante}
              />
              <Register
                label={'Outorgante'}
                changeUser={(user: any) => user && setOutorgante(user.id)}
              />
            </Col>
            <Col xs={6}>
              <Input
                control={control}
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
          <Row>
            <Col xs={6}>
              <PdvConnectedWith />
            </Col>
          </Row>
          <Row>
            <Col xs={3}>
              <Input
                control={control}
                type="text"
                label="Prazo para registro"
                placeholder={'...'}
                name="prazoRegistro"
                mask="maskDateBRL"
                error={errors.prazoRegistro?.message}
                value={prazoRegistro ? prazoRegistro : null}
              />
            </Col>
            <Col xs={3}>
              <Input
                control={control}
                type="text"
                label="Prazo para devolução irregular"
                placeholder={'...'}
                name="prazoDevolucao"
                error={errors.prazoDevolucao?.message}
                mask="maskDateBRL"
                value={prazoDevolucao ? prazoDevolucao : null}
              />
            </Col>
            <Col xs={3}>
              <Input
                control={control}
                type="text"
                label="Prenotação válida até"
                placeholder={'...'}
                name="prazoValidadePrenotacao"
                mask="maskDateBRL"
                error={errors.prazoValidadePrenotacao?.message}
                value={prazoValidade ? prazoValidade : null}
              />
            </Col>
            <Col xs={3}>
              <Input
                control={control}
                type="text"
                label="Data da notificação"
                placeholder={'...'}
                name="prazoNotificacao"
                mask="maskDateBRL"
                error={errors.prazoNotificacao?.message}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="pr-4 pt-5 mb-5">
              <PdvSearchBy type="Prenotação" />
            </Col>
          </Row>
          <Row>
            <Col xs={4}>
              <Select
                name="valorInformado"
                label="Valor informado"
                options={[
                  {
                    value: 'VENAL',
                    label: 'Venal'
                  },
                  {
                    value: 'DOCUMENTO',
                    label: 'Documento'
                  }
                ]}
                defaultValue={{
                  value: 'VENAL',
                  label: 'Venal'
                }}
                isInvalid={errors?.valorInformado}
              />
            </Col>
            <Col xs={4}>
              <Input
                control={control}
                type="number"
                label="Vias adicionais"
                placeholder={'...'}
                name="viasAdicionais"
                error={errors.viasAdicionais?.message}
                value={0}
              />
            </Col>
            <Col xs={4}>
              <Text label="Custas" color="dark" size="small" className="pt-3" />
              <Text
                label="R$ 199,90"
                color="primary"
                size="xxxlarge"
                className="pt-2"
              />
            </Col>
          </Row>
          <Row className="mt-4">
            <Col />
            <Col xs={2}>
              <Button
                id="add-service"
                label="Limpar"
                variant="secondary"
                onClick={() => {
                  clearErrors()
                }}
                block
              />
            </Col>
            <Col xs={3}>
              <Button
                id="add-service"
                type="submit"
                label="Adicionar"
                variant="primary"
                block
              />
            </Col>
          </Row>
        </Form>
      </FormProvider>
    </S.Wrapper>
  )
}

export default RecepcaoPrenotados
