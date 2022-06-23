import React, { useEffect, useState, useContext } from 'react'
import {
  faBarcode,
  faCreditCard,
  faDollarSign,
  faDonate,
  faMoneyBillAlt,
  faUniversity
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '../../../components/Button'
import Text from '../../../components/Text'
import { Col, Row } from 'react-bootstrap'
import { Props } from './interface'
import * as S from './styles'
import { PDVContext } from '../../../contexts/PDVContext'

const PdvResumeOrder = ({
  titleNextStep,
  titleBackStep,
  handleStep,
  prices
}: Props) => {
  const [totalGeral, setTotalGeral] = useState<number>(0)
  const [, setServicos] = useState<number>(0)
  const [faltante, setFaltante] = useState<number>(0)

  const { order, payment } = useContext(PDVContext)

  useEffect(() => {
    console.log(order)
    let price = 0
    {order && (
      order.map((elm: any) => {
        price += elm?.data?.valorTotal
      })
    )}
    setServicos(price)
    setFaltante(price - prices.descontos)
    setTotalGeral(price - prices.descontos)
  }, [order, prices.descontos])

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
              label="Resumo do pedido"
              className="d-inline ml-2"
              color="primary"
              size="xlarge"
              weight={700}
            />
          </Col>
        </Row>
      </S.BoxResumeFinance>
      {order?.map((item: any, index: number) => (
        <Row className="m-1" key={index}>
          <Col className="text-left border-bottom  pt-2 pb-2 pr-0">
            <Text
              label={`${index + 1}. ${item.name} (
                ${item.data.vias} ${item.data.vias > 1 ? 'vias' : 'via'})`}
              color="dark"
              size="xsmall"
              weight={300}
            />
          </Col>
          <Col className="text-right  border-bottom  pt-2 pb-2 pl-0">
            {item.data.valorTotal && (
            <Text
              label={`${item.data.valorTotal.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL'
              })}`}
              color="dark"
              size="regular"
              weight={300}
            />
            )}
          </Col>
        </Row>
      ))}
      <Row className="m-1">
        <Col className="text-left border-bottom  pt-2 pb-2 pr-0">
          <Text label="Descontos" color="warning" size="regular" weight={300} />
        </Col>
        <Col className="text-right  border-bottom  pt-2 pb-2 pl-0">
          {prices.descontos && (
          <Text
            label={`${prices.descontos.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL'
            })}`}
            color="warning"
            size="regular"
            weight={300}
          />
          )}
        </Col>
      </Row>
      {payment?.map((item: any, index: number) => (
        <Row className="m-1" key={index}>
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
      ))}
      <Row className="m-1">
        <Col className="text-left border-bottom  pt-2 pb-2 pr-0">
          <Text label="Faltante" color="danger" size="regular" weight={300} />
        </Col>
        <Col className="text-right  border-bottom  pt-2 pb-2 pl-0">
          <Text
            label={`${faltante.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL'
            })}`}
            size="regular"
            weight={300}
          />
        </Col>
      </Row>
      <Row className="m-1">
        <Col className="text-left border-bottom  pt-2 pb-2 pr-0">
          <Text label="Total Geral" color="primary" size="large" weight={700} />
        </Col>
        <Col className="text-right  border-bottom  pt-2 pb-2 pl-0">
          <Text
            label={`${totalGeral.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL'
            })}`}
            color="primary"
            size="large"
            weight={700}
          />
        </Col>
      </Row>
      <Button
        id="add-next-step"
        label={titleNextStep}
        variant="primary"
        className="mt-3 mb-3"
        onClick={() => {
          handleStep('nextStep')
        }}
        block
      />
      <Button
        id="add-go-step"
        label={titleBackStep}
        variant="outline-secondary"
        className="mt-3 mb-3"
        onClick={() => {
          handleStep('goBack')
        }}
        block
      />
    </>
  )
}

export default PdvResumeOrder
