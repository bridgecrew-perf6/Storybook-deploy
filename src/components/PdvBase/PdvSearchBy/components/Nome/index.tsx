import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Input from 'components/Forms/Input'
import Select from 'components/Forms/Select'
import React, { useState } from 'react'
import { Button as Btn, Col, Row } from 'react-bootstrap'
import { useFormContext } from 'react-hook-form'
import { DATA, DATA_DEFAULT } from './data'
import { Props } from './interface'

const Nome = ({ id, idFather, downTicket, upTicket, permitedDown }: Props) => {
  const {
    control,
    formState: { errors }
  } = useFormContext()

  const [defaultPersona, setDefaultPersona] = useState<string>('PF')
  return (
    <>
      <Row>
        <Col xs={5}>
          <Select
            name={`tickets.data[${idFather}].dataNome[${id}].tipoProprietario`}
            label="Tipo Proprietário"
            defaultValue={DATA_DEFAULT}
            isClearable
            options={DATA}
            placeholder="Escolha uma opção..."
            isInvalid={
              errors?.tickets?.data[idFather]?.dataNome[id]?.tipoProprietario
            }
            onChange={(item: any) => {
              setDefaultPersona(
                item.value === 'Pessoa Física - 1' ? 'PF' : 'PJ'
              )
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Input
            control={control}
            type="text"
            label="Proprietário"
            placeholder={'...'}
            name={`tickets.data[${idFather}].dataNome[${id}].proprietario`}
            error={
              errors?.tickets?.data[idFather]?.dataNome[id]?.proprietario
                ?.message
            }
          />
        </Col>
      </Row>
      {defaultPersona === 'PF' && (
        <Row>
          <Col xs={6}>
            <Input
              control={control}
              type="text"
              label="RG"
              placeholder={'...'}
              name={`tickets.data[${idFather}].dataNome[${id}].rg`}
              error={errors?.tickets?.data[idFather]?.dataNome[id]?.rg?.message}
            />
          </Col>
          <Col xs={6}>
            <Input
              control={control}
              type="text"
              label="CPF"
              placeholder={'...'}
              mask={'maskCPF'}
              name={`tickets.data[${idFather}].dataNome[${id}].cpf`}
              error={
                errors?.tickets?.data[idFather]?.dataNome[id]?.cpf?.message
              }
            />
          </Col>
        </Row>
      )}
      {defaultPersona === 'PJ' && (
        <Row>
          <Col xs={6}>
            <Input
              control={control}
              type="text"
              label="Inscrição Estadual"
              placeholder={'...'}
              name={`tickets.data[${idFather}].dataNome[${id}].inscricaoEstadual`}
              error={
                errors?.tickets?.data[idFather]?.dataNome[id]?.inscricaoEstadual
                  ?.message
              }
            />
          </Col>
          <Col xs={6}>
            <Input
              control={control}
              type="text"
              label="CNPJ"
              placeholder={'...'}
              name={`tickets.data[${idFather}].dataNome[${id}].cnpj`}
              error={
                errors?.tickets?.data[idFather]?.dataNome[id]?.cnpj?.message
              }
            />
          </Col>
        </Row>
      )}
      <Row>
        <Col xs={7} />
        <Col xs={3}>
          <Input
            control={control}
            type="number"
            label="Vias"
            placeholder={'...'}
            name={`tickets.data[${idFather}].dataNome[${id}].vias`}
            error={errors?.tickets?.data[idFather]?.dataNome[id]?.vias?.message}
          />
        </Col>
        <Col xs={1} className="d-flex align-items-end p-1">
          <Btn
            variant="outline-primary"
            size="lg"
            style={{ marginBottom: 4 }}
            block
            onClick={() => upTicket()}
          >
            <FontAwesomeIcon icon={faPlus} size={'1x'} />
          </Btn>
        </Col>
        <Col xs={1} className="d-flex align-items-end p-1">
          <Btn
            variant="outline-primary"
            size="lg"
            style={{ marginBottom: 4 }}
            block
            disabled={permitedDown ? false : true}
            onClick={() => downTicket(id, idFather)}
          >
            <FontAwesomeIcon icon={faMinus} size={'1x'} />
          </Btn>
        </Col>
      </Row>
    </>
  )
}

export default Nome
