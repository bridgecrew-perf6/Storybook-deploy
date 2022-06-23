import React, { useState } from 'react'
import { Form, Col, Row } from 'react-bootstrap'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { validatorSchema } from './validatorSchema'
import { useQuery } from '@apollo/client'
import { GET_DIVISOR_CUSTAS } from './gql'
import * as S from './styles'
import PdvSearchBy from 'components/Pdv/PdvSearchBy'
import Input from 'components/Forms/Input'
import { DATA_CUSTAS_DEFAULT, DATA_TIPO, DATA_TIPO_DEFAULT } from './data'
import Button from 'components/Button'
import Select from 'components/Forms/Select'
import Alert from 'components/Alert'

const RecepcaoCertidao: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const { data: dataDivisorCustas } = useQuery(GET_DIVISOR_CUSTAS)

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
          {Object.keys(errors).length !== 0 && (
            <Row>
              <Col>
                <Alert label="Campos obrigatórios" variant="danger" />
                {console.log('Exibindo os ERROS', errors)}
              </Col>
            </Row>
          )}
          <Row>
            <Col xs={6}>
              <Select
                name="tipo"
                label="Tipo"
                defaultValue={DATA_TIPO_DEFAULT}
                options={DATA_TIPO}
                isInvalid={errors?.tipo}
              />
            </Col>
            <Col xs={6}>
              <Select
                name="custas"
                label="Custas"
                defaultValue={DATA_CUSTAS_DEFAULT}
                options={dataDivisorCustas?.divisorCustas?.edges?.map(
                  (i: any) => ({
                    label: i.node.descricao,
                    value: i.node.id
                  })
                )}
                isInvalid={errors?.custas}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <Input
                control={control}
                type="text"
                label="Prenotação"
                placeholder={''}
                name="prenotacao"
                error={errors.prenotacao?.message}
              />
            </Col>
            <Col xs={6}>
              <Input
                control={control}
                type="text"
                label="Protocolo ARISP"
                placeholder={''}
                name="protocoloArisp"
                error={errors.protocoloArisp?.message}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="pr-4 pt-5 mb-5">
              <PdvSearchBy type="Certidão" />
            </Col>
          </Row>
          <Row>
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

export default RecepcaoCertidao
