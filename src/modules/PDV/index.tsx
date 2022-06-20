import {
  faCartPlus,
  faCreditCard,
  faEye,
  faFileAlt,
  faIdBadge,
  faKey
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MultiStepsPDV from 'components/MultiSteps/PDV'
import React, { useContext, useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import Confirmacao from './components/Confirmacao'
import Identificao from './components/Identificacao'
import Pagamento from './components/Pagamento'
import Recibo from './components/Recibo'
import Senha from './components/Senha'
import Servicos from './components/Servicos'
import { Props } from './interface'

/**
 * START - JSON - PROVISÓRIO
 */
import JSONPretty from 'react-json-pretty'
import 'react-json-pretty/themes/monikai.css'
import { PdvOrderContext } from 'contexts/PdvOrderContext'

/**
 * END - JSON - PROVISÓRIO
 */

const PDV = () => {
  const { order, step } = useContext(PdvOrderContext)

  const data: Props = {
    steps: [
      {
        name: 'Senha',
        component: <Senha />,
        icon: <FontAwesomeIcon icon={faKey} size={'2x'} />,
        status: order?.senha?.status || 'WAITING'
      },
      {
        name: 'Identificação',
        component: <Identificao />,
        icon: <FontAwesomeIcon icon={faIdBadge} size={'2x'} />,
        status: order?.identificacao?.status || 'WAITING'
      },
      {
        name: 'Serviços',
        component: <Servicos />,
        icon: <FontAwesomeIcon icon={faCartPlus} size={'2x'} />,
        status: 'WAITING'
      },
      {
        name: 'Confirmação',
        component: <Confirmacao />,
        icon: <FontAwesomeIcon icon={faEye} size={'2x'} />,
        status: order?.confirmacao?.status || 'WAITING'
      },
      {
        name: 'Pagamento',
        component: <Pagamento />,
        icon: <FontAwesomeIcon icon={faCreditCard} size={'2x'} />,
        status: order?.pagamento?.status || 'WAITING'
      },
      {
        name: 'Recibo',
        component: <Recibo />,
        icon: <FontAwesomeIcon icon={faFileAlt} size={'2x'} />,
        status: order?.recibo?.status || 'WAITING'
      }
    ]
  }

  return (
    <>
      <Row>
        <Col className="d-flex justify-content-center">
          <MultiStepsPDV
            showNavigation={true}
            permitedNavigation={true}
            steps={data.steps}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>PEDIDO:</h3>
          <JSONPretty data={order}></JSONPretty>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>ETAPA:</h3>
          <JSONPretty data={step}></JSONPretty>
        </Col>
      </Row>
    </>
  )
}

export default PDV
