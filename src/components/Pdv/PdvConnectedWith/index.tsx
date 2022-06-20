import React, { useState } from 'react'
import Input from 'components/Forms/Input'
import { Col, Row } from 'react-bootstrap'
import { useFormContext } from 'react-hook-form'
import Select from 'components/Forms/Select'
import PdvSetNumeroRegistro from '../PdvSetNumeroRegistro'

const PdvConnectedWith = () => {
  const [connectedWith, setConnectedWith] = useState({
    value: 'Nenhuma',
    label: 'Nenhuma'
  })
  const [isTrue, setIsTrue] = useState<boolean>(false)
  const [itemNumero, setItemNumero] = useState<number>(1)
  const {
    register,
    formState: { errors }
  } = useFormContext()
  const updateSelect = (e: any) => {
    setConnectedWith({
      value: e.value,
      label: e.value
    })
  }
  return (
    <>
      <Row>
        <Col xs={6}>
          <Select
            name="coligadoCom"
            label="Coligado com"
            placeholder="Escolha..."
            error={errors.coligado?.message}
            options={[
              {
                value: 'Nenhuma',
                label: 'Nenhuma'
              },
              {
                value: 'Prenotado',
                label: 'Prenotado'
              },
              {
                value: 'Exame e Cálculo',
                label: 'Exame e Cálculo'
              }
            ]}
            isInvalid={errors?.coligadoCom}
            onChange={updateSelect}
            value={connectedWith}
          />
        </Col>
        <Col xs={6}>
          {connectedWith.value.length > 0 && connectedWith.value !== 'Nenhuma' && (
            <PdvSetNumeroRegistro
              label={connectedWith.label}
              isTrueInput={isTrue}
              changeInput={(elm: any) => {
                if (elm?.numero) {
                  setItemNumero(elm?.numero)
                  setIsTrue(true)
                }
              }}
            />
          )}
        </Col>
      </Row>
      <Row>
        <Col>
          <Input
            register={register}
            type="number"
            label=""
            value={itemNumero}
            placeholder={'...'}
            name={`coligacaoNumero`}
            error={errors?.coligacaoNumero?.message}
            className={'d-none'}
          />
        </Col>
      </Row>
    </>
  )
}

export default PdvConnectedWith
