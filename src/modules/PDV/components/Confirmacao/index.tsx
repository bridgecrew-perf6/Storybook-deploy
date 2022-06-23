import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PdvResumeOrder from 'components/Pdv/PdvResumeOrder'
import Text from 'components/Text'
import { PDVContext } from 'contexts/PDVContext'
import React, { useContext, useState } from 'react'
import { Col, Image, Row, Table } from 'react-bootstrap'
import * as S from './styles'

const Confirmacao: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { order, handleStep } = useContext(PDVContext)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [resumeFinance, _setResumeFinance] = useState([])

  const loadCart = () => {
    return (
      order?.length > 0 && (
        <>
          <Row>
            <Col>
              <Table responsive striped className="table-default primary mt-4">
                <tbody>
                  {order?.map((i: any, index: number) => (
                    <tr key={index}>
                      <td />
                      <td className="d-table-cell align-middle">
                        <Image src={i.image} height={80} width={80} />
                        <Text
                          label={i?.item.name || '- - -'}
                          color="primary"
                          size="regular"
                          weight={700}
                        />
                        <Text
                          label={i?.name || '- - -'}
                          color="primary"
                          size="regular"
                          weight={300}
                        />
                      </td>
                      <td className="d-table-cell align-middle">
                        {i?.item.name === 'Prenotação' && (
                          <>
                            <Text
                              label={i?.data.tipo.label}
                              color="primary"
                              size="small"
                              weight={700}
                            />
                            <Text
                              label={i?.data.tabela.label}
                              color="secondary"
                              size="small"
                              weight={700}
                            />
                            {i.data.tickets.data[0].dataRegistro?.map(
                              (item: any, indexItem: number) => (
                                <Text
                                  key={indexItem}
                                  label={`${i?.data.prenotacaoPesquisarPor.label}: ${item?.numero}`}
                                  color="dark"
                                  size="small"
                                  weight={300}
                                />
                              )
                            )}
                          </>
                        )}
                      </td>
                      <td className="pl-0 pr-0 ml-0 mr-0 text-center  d-table-cell align-middle">
                        <S.ItemCount>
                          <Text
                            label={i.data.vias}
                            color="primary"
                            size="xxlarge"
                            weight={700}
                          />
                        </S.ItemCount>
                      </td>
                      <td className="pl-0 pr-0 ml-0 mr-0 text-center  d-table-cell align-middle">
                        <Text
                          label={`R$`}
                          color="primary"
                          size="small"
                          weight={300}
                          className="d-inline mr-2"
                        />
                        <Text
                          label={`${i.data.valorTotal.toLocaleString('pt-br', {
                            currency: 'BRL'
                          })}`}
                          color="primary"
                          size="xxlarge"
                          weight={700}
                          className="d-inline"
                        />
                      </td>
                      <td className="text-center  d-table-cell align-middle">
                        <FontAwesomeIcon icon={faEdit} color={'blue'} />
                      </td>
                      <td className="text-center  d-table-cell align-middle">
                        <FontAwesomeIcon icon={faTrash} color={'blue'} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </>
      )
    )
  }

  return (
    <>
      <Row>
        <Col xs={8}>{loadCart()}</Col>
        <Col xs={4}>
          <PdvResumeOrder
            titleBackStep="Voltar"
            titleNextStep="Validar emissão"
            prices={{
              descontos: 15
            }}
            handleStep={(e: any) => console.log(e)}
          />
        </Col>
      </Row>
    </>
  )
}

export default Confirmacao
