import { faMinus, faPlus, faQuestion } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PdvSetNumeroRegistro from '../../../PdvSetNumeroRegistro'
import React, { useState } from 'react'
import { Button as Btn, Col, Row } from 'react-bootstrap'
import { Props } from './interface'
import Input from 'components/Forms/Input'
import { useFormContext } from 'react-hook-form'

const Registros = ({
  id,
  idFather,
  base,
  tipo,
  upTicket,
  downTicket,
  permitedDown = true
}: Props) => {
  const {
    control,
    formState: { errors }
  } = useFormContext()

  const [itemNumero, setItemNumero] = useState<number>(1)
  const [isTrue, setIsTrue] = useState<boolean>(false)

  return (
    <>
      <Row className="d-flex align-items-end">
        <Col xs={1}>
          <Btn
            variant="info"
            size="lg"
            className={`pl-0 pr-0 ${
              tipo === 'Matrícula' ? 'd-block' : 'd-none'
            }`}
            block
          >
            <FontAwesomeIcon icon={faQuestion} size={'1x'} />
          </Btn>
        </Col>
        <Col xs={5}>
          <PdvSetNumeroRegistro
            label={tipo}
            isTrueInput={isTrue}
            changeInput={(elm: any) => {
              if (elm?.numero) {
                setItemNumero(elm?.numero)
                setIsTrue(true)
              }
            }}
          />
        </Col>
        <Col
          xs={2}
          className={`  ${base === 'Certidão' ? 'd-block' : 'd-none'}`}
        >
          <Input
            control={control}
            type="number"
            label="Vias"
            placeholder={'...'}
            name={`tickets.data[${idFather}].dataRegistro[${id}].vias`}
            error={
              errors?.tickets?.data &&
              errors?.tickets?.data[idFather]?.dataRegistro[id]?.vias?.message
            }
          />
        </Col>
        <Col xs={2}>
          <Btn
            variant="outline-primary"
            size="lg"
            block
            onClick={() => upTicket()}
          >
            <FontAwesomeIcon icon={faPlus} size={'1x'} />
          </Btn>
        </Col>
        <Col xs={2}>
          <Btn
            variant="outline-primary"
            size="lg"
            block
            disabled={permitedDown ? false : true}
            onClick={() => downTicket(id, idFather)}
          >
            <FontAwesomeIcon icon={faMinus} size={'1x'} />
          </Btn>
        </Col>
      </Row>
      <Row>
        <Col>
          <Input
            control={control}
            type="number"
            label=""
            value={itemNumero}
            placeholder={'...'}
            name={`tickets.data[${idFather}].dataRegistro[${id}].numero`}
            error={
              errors?.tickets?.data &&
              errors?.tickets?.data[idFather]?.dataRegistro[id]?.numero?.message
            }
            className={'d-none'}
          />
        </Col>
      </Row>
    </>
  )
}

export default Registros
