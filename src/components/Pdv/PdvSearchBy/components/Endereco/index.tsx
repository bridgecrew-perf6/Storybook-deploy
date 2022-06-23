import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Input from 'components/Forms/Input'
import Select from 'components/Forms/Select'
import React, { useState } from 'react'
import { Button as Btn, Col, Row } from 'react-bootstrap'
import { useFormContext } from 'react-hook-form'
import {
  DATA_TIPO_ENDERECO,
  DATA_TIPO_LOGRADOURO,
  DEFAULT_OPTIONS_TIPO_ENDERECO,
  DEFAULT_OPTIONS_TIPO_LOGRADOURO
} from './data'
import { Props } from './interface'

const Endereco = ({
  id,
  idFather,
  downTicket,
  upTicket,
  permitedDown
}: Props) => {
  const {
    control,
    formState: { errors }
  } = useFormContext()

  const [defaultTypeAddress, setDefaultTypeAddress] =
    useState<string>('Apartamento - 01')
  return (
    <>
      <Row>
        <Col xs={5}>
          <Select
            name={`tickets.data[${idFather}].dataEndereco[${id}].tipoEndereco`}
            label="Tipo Endereço"
            defaultValue={DEFAULT_OPTIONS_TIPO_ENDERECO}
            isClearable
            options={DATA_TIPO_ENDERECO}
            isInvalid={
              errors?.tickets?.data[idFather]?.dataEndereco[id]?.tipoEndereco
            }
            onChange={(val: any) => {
              setDefaultTypeAddress(val?.value)
            }}
          />
        </Col>
      </Row>

      <Row>
        <Col xs={3}>
          <Input
            control={control}
            type="text"
            label="Código Postal - CEP"
            placeholder={'...'}
            name={`tickets.data[${idFather}].dataEndereco[${id}].cep`}
            mask="maskPostalCode"
            error={
              errors?.tickets?.data[idFather]?.dataEndereco[id]?.cep?.message
            }
          />
        </Col>
      </Row>
      <Row>
        {[
          'Apartamento - 01',
          'Conjunto - 02',
          'Casa - 03',
          'Escritório - 04',
          'Loja - 05',
          'Lote - 06',
          'Terreno - 07',
          'Vaga - 08'
        ].includes(defaultTypeAddress) && (
          <Col xs={3}>
            <Select
              name={`tickets.data[${idFather}].dataEndereco[${id}].tipoLogrado`}
              label="Tipo Logradrouro"
              defaultValue={DEFAULT_OPTIONS_TIPO_LOGRADOURO}
              isClearable
              options={DATA_TIPO_LOGRADOURO}
              isInvalid={
                errors?.tickets?.data[idFather]?.dataEndereco[id]?.tipoLogrado
              }
            />
          </Col>
        )}
        {[
          'Apartamento - 01',
          'Conjunto - 02',
          'Casa - 03',
          'Escritório - 04',
          'Loja - 05',
          'Lote - 06',
          'Terreno - 07',
          'Vaga - 08'
        ].includes(defaultTypeAddress) && (
          <Col xs={7}>
            <Input
              control={control}
              type="text"
              label="Endereço"
              placeholder={'...'}
              name={`tickets.data[${idFather}].dataEndereco[${id}].endereco`}
              error={
                errors?.tickets?.data[idFather]?.dataEndereco[id]?.endereco
                  ?.message
              }
            />
          </Col>
        )}
        {[
          'Apartamento - 01',
          'Conjunto - 02',
          'Casa - 03',
          'Escritório - 04',
          'Loja - 05',
          'Lote - 06',
          'Terreno - 07',
          'Vaga - 08'
        ].includes(defaultTypeAddress) && (
          <Col xs={2}>
            <Input
              control={control}
              type="text"
              label="Número"
              placeholder={'...'}
              name={`tickets.data[${idFather}].dataEndereco[${id}].numero`}
              error={
                errors?.tickets?.data[idFather]?.dataEndereco[id]?.numero
                  ?.message
              }
            />
          </Col>
        )}
        {[
          'Apartamento - 01',
          'Conjunto - 02',
          'Casa - 03',
          'Escritório - 04',
          'Loja - 05',
          'Lote - 06',
          'Terreno - 07',
          'Vaga - 08'
        ].includes(defaultTypeAddress) && (
          <Col xs={12}>
            <Input
              control={control}
              type="text"
              label="Complemento"
              placeholder={'...'}
              name={`tickets.data[${idFather}].dataEndereco[${id}].complemento`}
              error={
                errors?.tickets?.data[idFather]?.dataEndereco[id]?.complemento
                  ?.message
              }
            />
          </Col>
        )}
        {[
          'Apartamento - 01',
          'Conjunto - 02',
          'Escritório - 04',
          'Loja - 05',
          'Vaga - 08'
        ].includes(defaultTypeAddress) && (
          <Col xs={12}>
            <Input
              control={control}
              type="text"
              label="Edifício"
              placeholder={'...'}
              name={`tickets.data[${idFather}].dataEndereco[${id}].edificio`}
              error={
                errors?.tickets?.data[idFather]?.dataEndereco[id]?.edificio
                  ?.message
              }
            />
          </Col>
        )}
      </Row>
      <Row>
        {['Conjunto - 02'].includes(defaultTypeAddress) && (
          <Col xs={4}>
            <Input
              control={control}
              type="text"
              label="Conjunto"
              placeholder={'...'}
              name={`tickets.data[${idFather}].dataEndereco[${id}].conjunto`}
              error={
                errors?.tickets?.data[idFather]?.dataEndereco[id]?.conjunto
                  ?.message
              }
            />
          </Col>
        )}
        {['Escritório - 04'].includes(defaultTypeAddress) && (
          <Col xs={4}>
            <Input
              control={control}
              type="text"
              label="Escritório"
              placeholder={'...'}
              name={`tickets.data[${idFather}].dataEndereco[${id}].escritorio`}
              error={
                errors?.tickets?.data[idFather]?.dataEndereco[id]?.escritorio
                  ?.message
              }
            />
          </Col>
        )}
        {['Loja - 05'].includes(defaultTypeAddress) && (
          <Col xs={4}>
            <Input
              control={control}
              type="text"
              label="Loja"
              placeholder={'...'}
              name={`tickets.data[${idFather}].dataEndereco[${id}].loja`}
              error={
                errors?.tickets?.data[idFather]?.dataEndereco[id]?.loja?.message
              }
            />
          </Col>
        )}
        {['Apartamento - 01'].includes(defaultTypeAddress) && (
          <Col xs={4}>
            <Input
              control={control}
              type="text"
              label="Apartamento"
              placeholder={'...'}
              name={`tickets.data[${idFather}].dataEndereco[${id}].apartamento`}
              error={
                errors?.tickets?.data[idFather]?.dataEndereco[id]?.apartamento
                  ?.message
              }
            />
          </Col>
        )}
        {[
          'Apartamento - 01',
          'Conjunto - 02',
          'Escritório - 04',
          'Loja - 05'
        ].includes(defaultTypeAddress) && (
          <Col xs={4}>
            <Input
              control={control}
              type="text"
              label="Bloco"
              placeholder={'...'}
              name={`tickets.data[${idFather}].dataEndereco[${id}].bloco`}
              error={
                errors?.tickets?.data[idFather]?.dataEndereco[id]?.bloco
                  ?.message
              }
            />
          </Col>
        )}
        {[
          'Apartamento - 01',
          'Conjunto - 02',
          'Escritório - 04',
          'Loja - 05',
          'Vaga - 08'
        ].includes(defaultTypeAddress) && (
          <Col xs={4}>
            <Input
              control={control}
              type="text"
              label="Vaga"
              placeholder={'...'}
              name={`tickets.data[${idFather}].dataEndereco[${id}].vaga`}
              error={
                errors?.tickets?.data[idFather]?.dataEndereco[id]?.vaga?.message
              }
            />
          </Col>
        )}
      </Row>
      <Row>
        {['Lote - 06', 'Terreno - 07'].includes(defaultTypeAddress) && (
          <Col xs={4}>
            <Input
              control={control}
              type="text"
              label="Loteamento"
              placeholder={'...'}
              name={`tickets.data[${idFather}].dataEndereco[${id}].loteamento`}
              error={
                errors?.tickets?.data[idFather]?.dataEndereco[id]?.loteamento
                  ?.message
              }
            />
          </Col>
        )}
        {['Lote - 06', 'Terreno - 07'].includes(defaultTypeAddress) && (
          <Col xs={4}>
            <Input
              control={control}
              type="text"
              label="Quadra"
              placeholder={'...'}
              name={`tickets.data[${idFather}].dataEndereco[${id}].quadra`}
              error={
                errors?.tickets?.data[idFather]?.dataEndereco[id]?.quadra
                  ?.message
              }
            />
          </Col>
        )}
        {['Lote - 06', 'Terreno - 07'].includes(defaultTypeAddress) && (
          <Col xs={4}>
            <Input
              control={control}
              type="text"
              label="Lote"
              placeholder={'...'}
              name={`tickets.data[${idFather}].dataEndereco[${id}].lote`}
              error={
                errors?.tickets?.data[idFather]?.dataEndereco[id]?.lote?.message
              }
            />
          </Col>
        )}
      </Row>

      <Row>
        {[
          'Apartamento - 01',
          'Conjunto - 02',
          'Casa - 03',
          'Escritório - 04',
          'Loja - 05',
          'Lote - 06',
          'Terreno - 07',
          'Vaga - 08'
        ].includes(defaultTypeAddress) && (
          <Col xs={5}>
            <Input
              control={control}
              type="text"
              label="Bairro"
              placeholder={'...'}
              name={`tickets.data[${idFather}].dataEndereco[${id}].bairro`}
              error={
                errors?.tickets?.data[idFather]?.dataEndereco[id]?.bairro
                  ?.message
              }
            />
          </Col>
        )}
        {[
          'Apartamento - 01',
          'Conjunto - 02',
          'Casa - 03',
          'Escritório - 04',
          'Loja - 05',
          'Lote - 06',
          'Terreno - 07',
          'Vaga - 08'
        ].includes(defaultTypeAddress) && (
          <Col xs={4}>
            <Input
              control={control}
              type="text"
              label="Cidade"
              placeholder={'...'}
              value="São Paulo"
              name={`tickets.data[${idFather}].dataEndereco[${id}].cidade`}
              error={
                errors?.tickets?.data[idFather]?.dataEndereco[id]?.cidade
                  ?.message
              }
            />
          </Col>
        )}
        {[
          'Apartamento - 01',
          'Conjunto - 02',
          'Casa - 03',
          'Escritório - 04',
          'Loja - 05',
          'Lote - 06',
          'Terreno - 07',
          'Vaga - 08'
        ].includes(defaultTypeAddress) && (
          <Col xs={2}>
            <Input
              control={control}
              type="text"
              label="UF"
              value="SP"
              placeholder={'...'}
              name={`tickets.data[${idFather}].dataEndereco[${id}].uf`}
              error={
                errors?.tickets?.data[idFather]?.dataEndereco[id]?.uf?.message
              }
              disabled
            />
          </Col>
        )}
      </Row>

      <Row>
        <Col xs={7} />
        <Col xs={3}>
          <Input
            control={control}
            type="number"
            label="Vias"
            placeholder={'...'}
            name={`tickets.data[${idFather}].dataEndereco[${id}].vias`}
            error={
              errors?.tickets?.data[idFather]?.dataEndereco[id]?.vias?.message
            }
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

export default Endereco
