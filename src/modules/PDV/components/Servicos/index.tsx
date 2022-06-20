import Text from 'components/Text'
import Image from 'next/image'
import React, { useState, useContext } from 'react'

import { Col, Row } from 'react-bootstrap'
import Button from 'components/Button'
import { dataServices, dataServicesType } from './data'
import { ServiceProps, TypeProps } from './interface'
import * as S from './styles'

import RecepcaoCertidao from './components/Recepcao/Certidao'
import DevolucaoCertidao from './components/Devolucao/Certidao'
import RecepcaoPrenotacao from './components/Recepcao/Prenotacao'
import DevolucaoPrenotacao from './components/Devolucao/Prenotacao'
import RecepcaoExameCalculo from './components/Recepcao/ExameCalculo'
import DevolucaoExameCalculo from './components/Devolucao/ExameCalculo'
import { PdvOrderContext } from 'contexts/PdvOrderContext'

const Servicos: React.FC = () => {
  const { handleStep, handleOrder, order } = useContext(PdvOrderContext)

  const [service, setService] = useState<TypeProps>()

  const chooseTheServiceType = () => {
    return (
      !service && (
        <Row>
          <Col className="d-flex justify-content-center">
            <S.ListService>
              {dataServicesType?.map((item: TypeProps, index: number) => (
                <S.ListServiceItem
                  key={index}
                  onClick={() => {
                    setService(item)
                  }}
                >
                  <Image
                    src={item.image || '/img/icon_no_image.png'}
                    height={200}
                    width={200}
                    layout="responsive"
                  />
                  <Text label={`${item.name}`} color="primary" size="xlarge" />
                </S.ListServiceItem>
              ))}
              {order?.length > 0 && (
                <S.ListServiceBtn>
                  <Button
                    id="next-step"
                    variant="primary"
                    label="Avançar"
                    type="text"
                    block
                    onClick={() => {
                      handleStep('Confirmação')
                    }}
                  />
                </S.ListServiceBtn>
              )}
            </S.ListService>
          </Col>
        </Row>
      )
    )
  }

  const chooseTheService = () => {
    return (
      service &&
      !service?.item && (
        <Row>
          <Col className="d-flex justify-content-center">
            <S.ListService>
              {dataServices
                ?.filter((item) => item.typeIn.includes(service.type))
                ?.map((item: ServiceProps, index: number) => (
                  <S.ListServiceItem
                    key={index}
                    onClick={() => {
                      setService({ ...service, item })
                    }}
                  >
                    <Image
                      src={item.image}
                      height={200}
                      width={200}
                      layout="responsive"
                    />
                    <Text label={item.name} color="primary" size="xlarge" />
                  </S.ListServiceItem>
                ))}
            </S.ListService>
          </Col>
        </Row>
      )
    )
  }

  const renderServicePreCart = (type: string, code: string) => {
    switch (code) {
      case 'PRENOTACAO':
        if (type === 'IN') return <RecepcaoPrenotacao service={service} />
        if (type === 'OUT') return <DevolucaoPrenotacao />
        break
      case 'CERTIDAO':
        if (type === 'IN') return <RecepcaoCertidao />
        if (type === 'OUT') return <DevolucaoCertidao />
        break
      case 'EXAME_E_CALCULO':
        if (type === 'IN') return <RecepcaoExameCalculo />
        if (type === 'OUT') return <DevolucaoExameCalculo />
        break
      default:
        break
    }
  }

  const loadPreCart = () => {
    return (
      service &&
      service?.item && (
        <>
          <Row>
            <Col>
              <Text
                label={`${service?.name} » ${service?.item?.name}`}
                color="primary"
                weight={700}
                size="xxlarge"
              />
            </Col>
          </Row>
          <Row>
            <Col className="border-top border-bottom pt-3 pb-3 mb-3 mt-3">
              {renderServicePreCart(service.type, service.item.code)}
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
                  setService(undefined)
                }}
                block
              />
            </Col>
            <Col xs={3}>
              <Button
                id="add-service"
                label="Adicionar"
                variant="primary"
                onClick={() => {
                  setService(undefined)
                  handleOrder({ ...order, service })
                }}
                block
              />
            </Col>
          </Row>
        </>
      )
    )
  }

  return (
    <>
      {chooseTheServiceType()}
      {chooseTheService()}
      {loadPreCart()}
    </>
  )
}

export default Servicos
