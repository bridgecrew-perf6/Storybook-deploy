import Button from 'components/Button'
import { PdvOrderContext } from 'contexts/PdvOrderContext'
import { ModuleIdentificationProps } from 'contexts/PdvOrderContext/interface'
import Register from 'modules/Auth/Register'
import React, { useContext, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import * as S from './styles'

const Identificao: React.FC = () => {
  const [disableNextStep, setDisableNextStep] = useState(true)

  const { handleStep, order, handleOrder } = useContext(PdvOrderContext)

  const preSetUser = (data: ModuleIdentificationProps) => {
    data && data?.id ? setDisableNextStep(false) : setDisableNextStep(true)

    const identificacao: ModuleIdentificationProps = {
      id: data.id,
      nome: data.nome,
      cpf: data.cpf,
      status: 'DONE'
    }

    handleOrder({ ...order, identificacao })
  }

  return (
    <S.Wrapper>
      <Row className="d-flex justify-content-center">
        <Col xs={7}>
          <Register label="Apresentante" changeUser={preSetUser} />
        </Col>
        <Col xs={7}>
          {!disableNextStep && (
            <Button
              id="btn-new-next-block"
              type="text"
              label="Avançar"
              variant="success"
              className="align-bottom"
              block
              onClick={() => handleStep('Serviços')}
              disabled={disableNextStep}
            />
          )}
        </Col>
      </Row>
    </S.Wrapper>
  )
}

export default Identificao
