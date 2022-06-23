import {
  faBarcode,
  faCreditCard,
  faDollarSign,
  faDonate,
  faMoneyBillAlt,
  faTimes,
  faUniversity
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from 'components/Button'
import Input from 'components/Forms/Input'
import Select from 'components/Forms/Select'
import Text from 'components/Text'
import { PDVContext } from 'contexts/PDVContext'
import React, { useContext, useState } from 'react'
import { Col, Form, Row, Table } from 'react-bootstrap'
import { FormProvider, useForm } from 'react-hook-form'
import * as S from './styles'

const Pagamento: React.FC = () => {
  const { order, handleStep } = useContext(PDVContext)
  const [loading, setLoading] = useState(false)
  const [resumeFinance, setResumeFinance] = useState<any>([])
  const [methodPayment, setMethodPayment] = useState<any>({})

  const methods = useForm({})

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = methods

  const handleData = async (formData: any) => {
    try {
      setLoading(true)
      const data = {
        method: methodPayment.value,
        title: methodPayment.label,
        value: formData.value
      }
      setResumeFinance([...resumeFinance, data])
      reset()
      setLoading(false)
    } catch (err) {
      console.log(err)
      setLoading(false)
    }
  }

  const removePayment = (index: number) => {
    const filtered = resumeFinance.filter(function (_value: number, i: number) {
      return index !== i
    })
    setResumeFinance(filtered)
  }

  const calcValueOrder = () => {
    let soma = 0
    for (const i in resumeFinance) {
      soma += resumeFinance[i].value
    }
    console.log(order)
    console.log(resumeFinance)

    return (
      <Text label={`R$ ${soma}`} color="primary" size="large" weight={700} />
    )
  }

  const handleIconPayment = (value: string) => {
    switch (value) {
      case 'DEBITO':
        return (
          <FontAwesomeIcon
            icon={faCreditCard}
            size={'1x'}
            className="text-primary float-left"
          />
        )
        break
      case 'DINHEIRO':
        return (
          <FontAwesomeIcon
            icon={faMoneyBillAlt}
            size={'1x'}
            className="text-primary float-left"
          />
        )
        break
      case 'TRANSFERENCIA':
        return (
          <FontAwesomeIcon
            icon={faUniversity}
            size={'1x'}
            className="text-primary"
          />
        )
        break
      case 'BOLETO_BANCARIO':
        return (
          <FontAwesomeIcon
            icon={faBarcode}
            size={'1x'}
            className="text-primary"
          />
        )
        break
      case 'PIX':
        return (
          <FontAwesomeIcon
            icon={faDonate}
            size={'1x'}
            className="text-primary"
          />
        )
        break
    }
  }

  const handleOnChange = (value: any, actionMeta: any) => {
    switch (actionMeta.action) {
      case 'select-option':
        console.group('Value Changed')
        console.log(value)
        console.log(`action: ${actionMeta.action}`)
        console.groupEnd()
        setMethodPayment(value)
        break
      case 'remove-value':
        console.group('Value Remove')
        console.log(value)
        console.log(`action: ${actionMeta.action}`)
        console.groupEnd()
        break
      case 'pop-value':
        console.group('Value Pop')
        console.log(value)
        console.log(`action: ${actionMeta.action}`)
        console.groupEnd()
        break
      case 'clear':
        console.group('Value Clear')
        console.log(value)
        console.log(`action: ${actionMeta.action}`)
        console.groupEnd()
        break
    }
  }

  const loadCart = () => {
    return (
      order?.length > 0 && (
        <>
          <Row>
            <Col>
              <Table responsive striped className="table-default primary mt-4">
                <thead>
                  <tr>
                    <tr></tr>
                    <th></th>
                    <th>Serviço</th>
                    <th>Tipo</th>
                    <th>Pesquisa por</th>
                    <th className="text-center">Vias</th>
                    <th className="min-th-tr text-center">Preço Unid.</th>
                    <th className="min-th-tr text-center">Preço Total</th>
                    <th className="min-th-tr text-center"></th>
                  </tr>
                </thead>
                <tbody>
                  {order?.map((i: any, index: number) => (
                    <tr key={index}>
                      <td></td>
                      <td className="text-center">
                        <Text
                          label={`${index + 1}`}
                          color="secondary"
                          size="xxlarge"
                          weight={700}
                        />
                      </td>
                      <td className="d-table-cell align-middle">
                        {i.item?.name}
                        <Text
                          label={i?.name || '- - -'}
                          color="primary"
                          size="regular"
                          weight={700}
                        />
                      </td>
                      <td className="d-table-cell align-middle">Propriedade</td>
                      <td className="d-table-cell align-middle">Endereço</td>
                      <td className="pl-0 pr-0 ml-0 mr-0 text-center">
                        <Text
                          label={`1`}
                          color="primary"
                          size="xxxxlarge"
                          weight={700}
                        />
                      </td>
                      <td className="pl-0 pr-0 ml-0 mr-0 text-center  d-table-cell align-middle">
                        R$ 23,90
                      </td>
                      <td className="pl-0 pr-0 ml-0 mr-0 text-center  d-table-cell align-middle">
                        R$ 56,80
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </>
      )
    )
  }

  const loadPayments = () => {
    return (
      <FormProvider {...methods}>
        <Form onSubmit={handleSubmit(handleData)}>
          <Row>
            <Col xs={4}>
              <Select
                id="id-service"
                name="search"
                label="Forma de Pagamento"
                placeholder="Escolha..."
                isInvalid={errors.service?.message}
                options={[
                  {
                    value: 'DEBITO',
                    label: 'Débito'
                  },
                  {
                    value: 'DINHEIRO',
                    label: 'Dinheiro'
                  },
                  {
                    value: 'TRANSFERENCIA',
                    label: 'TED / DOC'
                  },
                  {
                    value: 'BOLETO_BANCARIO',
                    label: 'Boleto Bancário'
                  },
                  {
                    value: 'PIX',
                    label: 'PIX'
                  }
                ]}
                onChange={handleOnChange}
              />
            </Col>
            <Col xs={4}>
              <Input
                register={register}
                type="text"
                label="Valor recebido"
                placeholder={'...'}
                name="value"
                mask="maskCurrencyBRL"
              />
            </Col>
            <Col xs={4} className="d-flex align-items-end">
              <Button
                id="add-service"
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
    )
  }

  const resumePayments = () => {
    return (
      <>
        <S.BoxResumeFinance>
          <Row>
            <Col className="d-flex align-items-end">
              <FontAwesomeIcon
                icon={faDollarSign}
                size={'2x'}
                className={'text-warning'}
              />
              <Text
                label="Resumo financeiro"
                className="d-inline ml-2"
                color="primary"
                size="xlarge"
                weight={700}
              />
            </Col>
          </Row>
        </S.BoxResumeFinance>
        <Row className="m-1">
          <Col className="text-left border-bottom  pt-2 pb-2 pr-0">
            <Text
              label="Valor dos serviços"
              color="primary"
              size="regular"
              weight={300}
            />
          </Col>
          <Col className="text-right  border-bottom  pt-2 pb-2 pl-0">
            <Text
              label="R$ 7.595,95"
              color="primary"
              size="regular"
              weight={300}
            />
          </Col>
        </Row>
        <Row className="m-1">
          <Col className="text-left border-bottom  pt-2 pb-2 pr-0">
            <Text
              label="Descontos"
              color="warning"
              size="regular"
              weight={300}
            />
          </Col>
          <Col className="text-right  border-bottom  pt-2 pb-2 pl-0">
            <Text
              label="R$ 7.595,95"
              color="warning"
              size="regular"
              weight={300}
            />
          </Col>
        </Row>
        {resumeFinance?.map((item: any, index: number) => (
          <S.LinePayments key={index}>
            <Row className="m-1">
              <Col xs={1} className="text-left border-bottom  pt-2 pb-2">
                {handleIconPayment(item.method)}
              </Col>
              <Col className="text-left border-bottom  pt-2 pb-2 pr-0 d-inline">
                <Text
                  label={item.title}
                  color="primary"
                  size="regular"
                  weight={300}
                  className="d-inline"
                />
                <FontAwesomeIcon
                  icon={faTimes}
                  size={'1x'}
                  onClick={() => removePayment(index)}
                  className="delete-line-payment text-danger d-inline ml-2"
                />
              </Col>
              <Col className="text-right  border-bottom  pt-2 pb-2 pl-0">
                <Text
                  label={`R$ ${item.value}`}
                  color="primary"
                  size="regular"
                  weight={300}
                />
              </Col>
            </Row>
          </S.LinePayments>
        ))}
        <Row className="m-1">
          <Col className="text-left border-bottom  pt-2 pb-2 pr-0">
            <Text label="Faltante" color="danger" size="regular" weight={300} />
          </Col>
          <Col className="text-right  border-bottom  pt-2 pb-2 pl-0">
            <Text
              label="R$ 7.595,95"
              color="danger"
              size="regular"
              weight={300}
            />
          </Col>
        </Row>
        <Row className="m-1">
          <Col className="text-left border-bottom  pt-2 pb-2 pr-0">
            <Text
              label="Total Geral"
              color="primary"
              size="large"
              weight={700}
            />
          </Col>
          <Col className="text-right  border-bottom  pt-2 pb-2 pl-0">
            {calcValueOrder()}
          </Col>
        </Row>
        <Button
          id="add-service"
          label="Finalizar e Emitir Pedido"
          variant="primary"
          className="mt-3 mb-3"
          onClick={() => {
            handleStep('Recibo')
          }}
          block
        />
        <Button
          id="add-service"
          label="Voltar"
          variant="outline-secondary"
          className="mt-3 mb-3"
          onClick={() => {
            handleStep('Confirmação')
          }}
          block
        />
      </>
    )
  }

  return (
    <>
      <Row>
        <Col xs={8}>
          {loadPayments()}
          {loadCart()}
        </Col>
        <Col xs={4}>{resumePayments()}</Col>
      </Row>
    </>
  )
}

export default Pagamento
