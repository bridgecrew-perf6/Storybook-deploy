import {
  faChevronLeft,
  faChevronRight,
  faUniversalAccess,
  faUser,
  faWheelchair
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Text from 'components/Text'
import { PdvOrderContext } from 'contexts/PdvOrderContext'
import { ModulePasswordProps } from 'contexts/PdvOrderContext/interface'
import React, { useState, useContext } from 'react'
import { Badge, Button, Col, Row } from 'react-bootstrap'
import { passwordCustomers } from './data'
import * as S from './styles'

const Senha = () => {
  const { order, handleStep, handleOrder } = useContext(PdvOrderContext)
  const [passwordSelected, setPasswordSelected] = useState<number>(0)

  const handlePassword = () => {
    const value: number =
      passwordCustomers.length > 0
        ? getRndInteger(1, passwordCustomers.length)
        : 0
    setPasswordSelected(value)
  }

  const getRndInteger = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const listingPasswords = () => {
    return (
      <>
        <Row>
          <Col className="d-flex">
            <Text
              label="Aguardando atendimento"
              color="primary"
              size="xlarge"
              weight={800}
            />
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <S.ListService>
              {passwordCustomers?.map((item: any, index: number) => (
                <S.ListServiceItem
                  key={index}
                  isActive={index + 1 === passwordSelected ? true : false}
                  onClick={() => setPasswordSelected(index + 1)}
                >
                  <FontAwesomeIcon
                    icon={
                      item.priority === 'normal'
                        ? faUniversalAccess
                        : faWheelchair
                    }
                    size="4x"
                  />
                  <Text
                    label={item.number}
                    color="primary"
                    size="xxxxlarge"
                    weight={800}
                  />
                  <Badge
                    variant={
                      item.time > 10
                        ? 'danger'
                        : item.time > 5
                        ? 'warning'
                        : 'info'
                    }
                  >
                    {item.time} min
                  </Badge>
                </S.ListServiceItem>
              ))}
            </S.ListService>
          </Col>
        </Row>
      </>
    )
  }
  return (
    <>
      <Row className="justify-content-center">
        {passwordSelected === 0 && (
          <Col className="d-flex justify-content-center" xs={4}>
            <Button size={'lg'} block onClick={() => handlePassword()}>
              <FontAwesomeIcon icon={faChevronRight} size="lg" className="" />{' '}
              Próximo cliente
            </Button>
          </Col>
        )}
        {passwordSelected > 0 && (
          <>
            <Col className="d-flex justify-content-center" xs={2}>
              <Button
                size={'lg'}
                variant="primary"
                block
                onClick={() => setPasswordSelected(0)}
              >
                <FontAwesomeIcon icon={faChevronLeft} size="lg" className="" />{' '}
                Voltar
              </Button>
            </Col>
            <Col className="d-flex justify-content-center" xs={4}>
              <Button
                size={'lg'}
                variant="success"
                block
                onClick={() => {
                  const senha: ModulePasswordProps = {
                    horarioEmissaoTicket: '2021-12-14 09:34',
                    horarioInicioAtendimento: '2021-12-14 10:15',
                    tipoAtendimento: 'Normal',
                    nomeFila: 'Caixa 1',
                    senha: passwordCustomers[passwordSelected - 1].number,
                    status: 'DONE'
                  }
                  handleOrder({ ...order, senha })
                  handleStep('Identificação')
                }}
              >
                <FontAwesomeIcon icon={faUser} size="lg" className="mr-2" />{' '}
                Iniciar atendimento n.º{' '}
                <strong>
                  {passwordCustomers[passwordSelected - 1].number}
                </strong>
              </Button>
            </Col>
          </>
        )}
      </Row>
      {listingPasswords()}
    </>
  )
}

export default Senha
