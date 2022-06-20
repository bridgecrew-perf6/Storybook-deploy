import {
  faBarcode,
  faCalendarCheck,
  faCheck,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from 'components/Button'
import Text from 'components/Text'
import { Container } from 'modules/Kanban/components/ModalFull/styles'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import * as S from './styles'

const showPix = () => {
  return (
    <Col xs={7}>
      <Row>
        <Col>
          <hr />
          <Row>
            <Col xs={4}>
              <Text
                label="Forma de pagamento:"
                size="small"
                weight={400}
                className="text-dark"
              />
              <Text
                label="PIX"
                size="xxlarge"
                weight={700}
                className="text-dark"
              />
            </Col>
            <Col className="text-right">
              <Text
                label="Este QR Code expira em 30 minutos:"
                size="small"
                weight={400}
                className="text-dark"
              />
              <Text
                label="Ao realizar esse pagamento você será informada em seu -mail."
                size="regular"
                weight={700}
                className="text-dark"
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            id="add-service"
            label="Copiar código PIX"
            variant="outline-primary"
            className="mt-3 mb-3"
            onClick={() => {
              console.log('Copiar código PIX')
            }}
            block
          />
        </Col>
        <Col>
          <Button
            id="add-service"
            label="Reenviar PIX para seu e-mail"
            variant="outline-primary"
            className="mt-3 mb-3"
            onClick={() => {
              console.log('Emitir Boleto bancário')
            }}
            block
          />
        </Col>
        <Col>
          <Button
            id="add-service"
            label="Enviar PIX para Whatsapp"
            variant="outline-primary"
            className="mt-3 mb-3"
            onClick={() => {
              console.log('Emitir Boleto bancário')
            }}
            block
          />
        </Col>
      </Row>
      <Row className="m-2 p-2">
        <Col xs={1}>
          <FontAwesomeIcon icon={faCheck} size="2x" className="text-warning" />
        </Col>
        <Col xs={11}>
          <Text
            label="Utilize o aplicativo do seu banco copiando o código PIX ou escaneando o QR-Code."
            size="xsmall"
            weight={400}
            className="text-dark"
          />
        </Col>
      </Row>
      <Row className="m-2 p-2">
        <Col xs={1}>
          <FontAwesomeIcon
            icon={faBarcode}
            size="2x"
            className="text-warning"
          />
        </Col>
        <Col xs={11}>
          <Text
            label="Confirme os dados de pagamento e o valor do seu pedido."
            size="xsmall"
            weight={400}
            className="text-dark"
          />
        </Col>
      </Row>
      <Row className="m-2 p-2">
        <Col xs={1}>
          <FontAwesomeIcon
            icon={faCalendarCheck}
            size="2x"
            className="text-warning"
          />
        </Col>
        <Col xs={11}>
          <Text
            label="Seu pagamento sreá processado e debitado do valor disponibel em sua conta-corrente."
            size="xsmall"
            weight={400}
            className="text-dark"
          />
        </Col>
      </Row>
    </Col>
  )
}
const showBoleto = () => {
  return (
    <Col xs={7}>
      <Row>
        <Col>
          <hr />
          <Row>
            <Col>
              <Text
                label="Forma de pagamento escolhida:"
                size="small"
                weight={400}
                className="text-dark"
              />
              <Text
                label="Boleto Bancário"
                size="xxlarge"
                weight={700}
                className="text-dark"
              />
            </Col>
            <Col className="text-right">
              <Text
                label="Vencimento:"
                size="small"
                weight={400}
                className="text-dark"
              />
              <Text
                label="14/10/2021"
                size="xxlarge"
                weight={700}
                className="text-dark"
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <hr />
          <Button
            id="add-service"
            label="Visualizar e imprimir Boleto Bancário"
            variant="primary"
            className="mt-3 mb-3"
            onClick={() => {
              console.log('Emitir Boleto bancário')
            }}
            block
          />
        </Col>
      </Row>
      <Row className="m-2 p-2">
        <Col xs={1}>
          <FontAwesomeIcon icon={faCheck} size="2x" className="text-warning" />
        </Col>
        <Col xs={11}>
          <Text
            label="O banco enviará a confirmação do pagamento em até 4 dias úteis. Após essa confirmação o pedido é liberado para entrega."
            size="xsmall"
            weight={400}
            className="text-dark"
          />
        </Col>
      </Row>
      <Row className="m-2 p-2">
        <Col xs={1}>
          <FontAwesomeIcon
            icon={faBarcode}
            size="2x"
            className="text-warning"
          />
        </Col>
        <Col xs={11}>
          <Text
            label="Para pagar o Boleto pelo Internet Banking de seu banco, digite ou copie o código de barras."
            size="xsmall"
            weight={400}
            className="text-dark"
          />
        </Col>
      </Row>
      <Row className="m-2 p-2">
        <Col xs={1}>
          <FontAwesomeIcon
            icon={faCalendarCheck}
            size="2x"
            className="text-warning"
          />
        </Col>
        <Col xs={11}>
          <Text
            label="O prazo de pagamento via boleto bancário é de 2 dias corridos após a conclusão do pedido."
            size="xsmall"
            weight={400}
            className="text-dark"
          />
        </Col>
      </Row>
    </Col>
  )
}
const Recibo: React.FC = () => {
  return (
    <S.Wrapper>
      <Row>
        <Col xs={8} className="d-flex align-items-center">
          <FontAwesomeIcon
            size="4x"
            color="success"
            icon={faCheckCircle}
            className="mr-3 text-success"
          />
          <Container>
            <Row>
              <Col>
                <Text
                  label="Pedido realizado com sucesso!"
                  size="xxlarge"
                  weight={700}
                  className="text-uppercase text-success"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Text
                  label="Agora é só realizar o pagamento."
                  size="xlarge"
                  weight={700}
                  className="text-uppercase text-primary "
                />
              </Col>
            </Row>
          </Container>
        </Col>
        <Col xs={2} className="d-flex align-items-center">
          <Text
            label="Pedido"
            size="xxlarge"
            weight={700}
            className="text-uppercase text-primary text-right"
          />
        </Col>
        <Col xs={2} className="d-flex align-items-center text-center">
          <Text
            label="1.261.648"
            size="xxxxlarge"
            weight={700}
            className="text-uppercase text-dark"
          />
        </Col>
      </Row>
      <Row className="row justify-content-md-center">
        {showBoleto()}
        {showPix()}
      </Row>
    </S.Wrapper>
  )
}

export default Recibo
