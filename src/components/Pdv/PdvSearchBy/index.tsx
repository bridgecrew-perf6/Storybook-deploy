/* eslint-disable @typescript-eslint/no-unused-vars */
import Input from 'components/Forms/Input'
import Select from 'components/Forms/Select'
import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useFormContext } from 'react-hook-form'
import Endereco from './components/Endereco'
import Nome from './components/Nome'
import Registros from './components/Registros'
import {
  DATA_CERTIDAO,
  DATA_CLEAR_ENDERECO,
  DATA_CLEAR_NOME,
  DATA_CLEAR_REGISTRO,
  DATA_PRENOTACAO,
  DEFAULT_OPTIONS
} from './data'
import { BaseProps, Props } from './interface'

const PdvSearchBy: React.FC<Props> = ({ type }) => {
  const {
    register,
    formState: { errors }
  } = useFormContext()

  const [pesquisarPor, setPesquisarPor] = useState({
    value: 'Matrícula',
    label: 'Matrícula'
  })

  const [tickets, setTickets] = useState<BaseProps>({
    data: [
      {
        tipo: 'Matrícula',
        vias: type === 'Prenotação' ? 0 : 1,
        numero: null,
        dataNome: [],
        dataEndereco: [],
        dataRegistro: [{ numero: '', vias: 0 }]
      }
    ],
    totalVias: 0
  })

  const handleObs = () => {
    return (
      <Row>
        <Col className={'pr-0'}>
          <Input
            register={register}
            type="text"
            label="Observações"
            placeholder={'...'}
            name="observacao"
            textarea={true}
          />
        </Col>
      </Row>
    )
  }

  const handleSearch = (e: any) => {
    setPesquisarPor({
      value: e.value,
      label: e.value
    })

    tickets.data = [
      {
        tipo: e.value,
        vias: 1,
        numero: null,
        dataNome: [],
        dataEndereco: [],
        dataRegistro: [DATA_CLEAR_REGISTRO]
      }
    ]

    setTickets({ ...tickets })
  }

  const handleDown = (index: number, idFather: number) => {
    const dataTipo: string = tickets.data[0].tipo
    if (
      [
        'Matrícula',
        'Transcrição',
        'Livro 3',
        'Inscrição',
        'Livro CGI'
      ].includes(dataTipo)
    ) {
      const filtered: any = tickets.data[idFather].dataRegistro.filter(
        function (_value: any, i: number) {
          return index !== i
        }
      )
      tickets.data[idFather].dataRegistro = filtered
    }

    if (dataTipo === 'Nome') {
      const filtered: any = tickets.data[idFather].dataNome.filter(function (
        _value: any,
        i: number
      ) {
        return index !== i
      })
      tickets.data[idFather].dataNome = filtered
    }
    if (dataTipo === 'Endereço') {
      const filtered: any = tickets.data[idFather].dataEndereco.filter(
        function (_value: any, i: number) {
          return index !== i
        }
      )
      tickets.data[idFather].dataEndereco = filtered
    }

    setTickets({ ...tickets })
  }

  const handleUp = () => {
    const dataTipo: string = tickets.data[0].tipo

    if (
      [
        'Matrícula',
        'Transcrição',
        'Livro 3',
        'Inscrição',
        'Livro CGI'
      ].includes(dataTipo)
    ) {
      const countA: number = tickets.data.length - 1
      tickets.data[countA].dataRegistro.push(DATA_CLEAR_REGISTRO)
      setTickets({ ...tickets })
    }

    if (dataTipo === 'Nome') {
      const countA: number = tickets.data.length - 1
      tickets.data[countA].dataNome.push(DATA_CLEAR_NOME)
      setTickets({ ...tickets })
    }
    if (dataTipo === 'Endereço') {
      const countA: number = tickets.data.length - 1
      tickets.data[countA].dataEndereco.push(DATA_CLEAR_ENDERECO)
      setTickets({ ...tickets })
    }
  }

  return (
    <>
      {type === 'Prenotação' &&
        tickets?.data?.map((i: any, index: number) => (
          <Row key={index} className="d-flex align-items-start">
            <Col xs={3}>
              <Select
                name="prenotacaoPesquisarPor"
                label="Pesquisar por"
                defaultValue={DEFAULT_OPTIONS}
                options={DATA_PRENOTACAO}
                isInvalid={errors?.prenotacaoPesquisarPor}
                // onChange={(e) => handleSearch(e)}
                // value={pesquisarPor}
              />
            </Col>
            <Col xs={9}>
              {tickets.data[index].dataRegistro?.map(
                (item: any, indexItem: number) => (
                  <Registros
                    key={indexItem}
                    id={indexItem}
                    idFather={index}
                    upTicket={handleUp}
                    downTicket={handleDown}
                    permitedDown={
                      tickets.data[index].dataRegistro.length > 1 ? true : false
                    }
                    base={type}
                    tipo={i.tipo}
                  />
                )
              )}
            </Col>
          </Row>
        ))}
      {type === 'Certidão' && (
        <>
          <Row className="d-flex align-items-start">
            <Col xs={3}>
              <Select
                name="pesquisarPor"
                label="Pesquisar por"
                defaultValue={{ value: 'Matrícula', label: 'Matrícula' }}
                options={DATA_CERTIDAO}
                isInvalid={errors?.pesquisarPor}
                onChange={(i: any) => {
                  const data: BaseProps = {
                    data: [
                      {
                        tipo: i?.value,
                        vias: 1,
                        numero: null,
                        dataNome: i?.value === 'Nome' ? [DATA_CLEAR_NOME] : [],
                        dataEndereco:
                          i?.value === 'Endereço' ? [DATA_CLEAR_ENDERECO] : [],
                        dataRegistro: ['Matrícula', 'Transcrição'].includes(
                          i?.value
                        )
                          ? [DATA_CLEAR_REGISTRO]
                          : []
                      }
                    ],
                    totalVias: 0
                  }
                  setPesquisarPor({
                    value: i.value,
                    label: i.value
                  })
                  setTickets(data)
                }}
              />
            </Col>
            <Col xs={9} className="pr-4">
              {tickets?.data?.map((i: any, index: number) => (
                <div key={index}>
                  {i.tipo === 'Endereço' && (
                    <>
                      {tickets.data[index].dataEndereco?.map(
                        (item: any, indexItem: number) => (
                          <Endereco
                            key={indexItem}
                            id={indexItem}
                            idFather={index}
                            upTicket={handleUp}
                            downTicket={handleDown}
                            permitedDown={
                              tickets.data[index].dataEndereco.length > 1
                                ? true
                                : false
                            }
                          />
                        )
                      )}
                    </>
                  )}
                  {i.tipo === 'Nome' && (
                    <>
                      {tickets.data[index].dataNome?.map(
                        (item: any, indexItem: number) => (
                          <Nome
                            key={indexItem}
                            id={indexItem}
                            idFather={index}
                            upTicket={handleUp}
                            downTicket={handleDown}
                            permitedDown={
                              tickets.data[index].dataNome.length > 1
                                ? true
                                : false
                            }
                          />
                        )
                      )}
                    </>
                  )}
                  {['Matrícula', 'Transcrição'].includes(i.tipo) && (
                    <>
                      {tickets.data[index].dataRegistro?.map(
                        (item: any, indexItem: number) => (
                          <Registros
                            key={indexItem}
                            id={indexItem}
                            idFather={index}
                            upTicket={handleUp}
                            downTicket={handleDown}
                            permitedDown={
                              tickets.data[index].dataRegistro.length > 1
                                ? true
                                : false
                            }
                            base={type}
                            tipo={i.tipo}
                          />
                        )
                      )}
                    </>
                  )}
                </div>
              ))}
            </Col>
          </Row>
          <Row className="d-flex align-items-end">
            <Col xs={3} />
            <Col xs={9}>{handleObs()}</Col>
          </Row>
        </>
      )}
    </>
  )
}

export default PdvSearchBy
