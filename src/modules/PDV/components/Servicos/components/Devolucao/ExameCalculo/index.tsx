import { faMinus, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Input from 'components/Forms/Input'
import SelectWithSearch from 'components/Forms/Select'
import React from 'react'
import { Button as Btn, Col, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import * as S from './styles'

const DevolucaoExameCalculo: React.FC = () => {
  const { control, register } = useForm({})

  const handleMatricula = () => {
    return (
      <>
        <Row>
          <Col xs={5}>
            <SelectWithSearch
              id="id-service"
              control={control}
              name="search"
              label="Matrícula"
              placeholder="..."
              // error={errors.service?.message}
              options={[
                {
                  value: '1001',
                  label: '1001'
                },
                {
                  value: '1002',
                  label: '1002'
                },
                {
                  value: '1003',
                  label: '1003'
                },
                {
                  value: '1004',
                  label: '1004'
                }
              ]}
              onChange={() => console.log(' Clio')}
            />
          </Col>
          <Col xs={1} className="d-flex align-items-end p-1">
            <Btn variant="info" size="lg" style={{ marginBottom: 4 }} block>
              <FontAwesomeIcon icon={faSearch} size={'1x'} />
            </Btn>
          </Col>
          <Col xs={4}>
            <SelectWithSearch
              id="id-service"
              control={control}
              name="search"
              label="Vias"
              placeholder="..."
              // error={errors.service?.message}
              options={[
                {
                  value: '1 via',
                  label: '1 via'
                },
                {
                  value: '2 vias',
                  label: '2 vias'
                },
                {
                  value: '3 vias',
                  label: '3 vias'
                },
                {
                  value: '4 vias',
                  label: '4 vias'
                }
              ]}
              onChange={() => console.log('Clickou')}
            />
          </Col>
          <Col xs={1} className="d-flex align-items-end p-1">
            <Btn
              variant="outline-primary"
              size="lg"
              style={{ marginBottom: 4 }}
              block
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
            >
              <FontAwesomeIcon icon={faMinus} size={'1x'} />
            </Btn>
          </Col>
        </Row>
      </>
    )
  }

  const handleTranscricao = () => {
    return (
      <Row>
        <Col xs={5}>
          <SelectWithSearch
            id="id-service"
            control={control}
            name="search-transcricao"
            label="Transcricao"
            placeholder="..."
            // error={errors.service?.message}
            options={[
              {
                value: '1000.102',
                label: '1000.102'
              },
              {
                value: '1002.102',
                label: '1002.102'
              },
              {
                value: '1003.102',
                label: '1003.102'
              },
              {
                value: '1004.102',
                label: '1004.102'
              }
            ]}
            onChange={() => console.log('clicou')}
          />
        </Col>
        <Col xs={1} className="d-flex align-items-end p-1">
          <Btn variant="info" size="lg" style={{ marginBottom: 4 }} block>
            <FontAwesomeIcon icon={faSearch} size={'1x'} />
          </Btn>
        </Col>
        <Col xs={4}>
          <SelectWithSearch
            id="id-service"
            control={control}
            name="search"
            label="Vias"
            placeholder="..."
            // error={errors.service?.message}
            options={[
              {
                value: '1 via',
                label: '1 via'
              },
              {
                value: '2 vias',
                label: '2 vias'
              },
              {
                value: '3 vias',
                label: '3 vias'
              },
              {
                value: '4 vias',
                label: '4 vias'
              }
            ]}
            onChange={() => console.log('clicou')}
          />
        </Col>
        <Col xs={1} className="d-flex align-items-end p-1">
          <Btn
            variant="outline-primary"
            size="lg"
            style={{ marginBottom: 4 }}
            block
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
          >
            <FontAwesomeIcon icon={faMinus} size={'1x'} />
          </Btn>
        </Col>
      </Row>
    )
  }

  const handleNome = () => {
    return (
      <>
        <Row>
          <Col xs={5}>
            <SelectWithSearch
              id="id-service"
              control={control}
              name="search-proprietario"
              label="Tipo Proprietário"
              placeholder="..."
              // error={errors.service?.message}
              options={[
                {
                  value: 'Pessoa Física - 1',
                  label: 'Pessoa Física - 1'
                },
                {
                  value: 'Pessoa Jurídica - 2',
                  label: 'Pessoa Jurídica - 2'
                }
              ]}
              onChange={() => console.log('clicou')}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Input
              register={register}
              type="text"
              label="Proprietário"
              placeholder={'...'}
              name="proprietario"
            />
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <Input
              register={register}
              type="text"
              label="RG"
              placeholder={'...'}
              name="rg"
            />
          </Col>
          <Col xs={6}>
            <Input
              register={register}
              type="text"
              label="CPF"
              placeholder={'...'}
              name="cpf"
              mask={'maskCPF'}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <Input
              register={register}
              type="text"
              label="Inscrição Estadual"
              placeholder={'...'}
              name="ie"
            />
          </Col>
          <Col xs={6}>
            <Input
              register={register}
              type="text"
              label="CNPJ"
              placeholder={'...'}
              name="cnpj"
            />
          </Col>
        </Row>
        <Row>
          <Col xs={7} />
          <Col xs={3}>
            <SelectWithSearch
              id="id-service"
              control={control}
              name="search"
              label="Vias"
              placeholder="..."
              // error={errors.service?.message}
              options={[
                {
                  value: '1 via',
                  label: '1 via'
                },
                {
                  value: '2 vias',
                  label: '2 vias'
                },
                {
                  value: '3 vias',
                  label: '3 vias'
                },
                {
                  value: '4 vias',
                  label: '4 vias'
                }
              ]}
              onChange={() => console.log('clicou')}
            />
          </Col>
          <Col xs={1} className="d-flex align-items-end p-1">
            <Btn
              variant="outline-primary"
              size="lg"
              style={{ marginBottom: 4 }}
              block
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
            >
              <FontAwesomeIcon icon={faMinus} size={'1x'} />
            </Btn>
          </Col>
        </Row>
      </>
    )
  }

  const handleEndereco = () => {
    return (
      <>
        <Row>
          <Col xs={5}>
            <SelectWithSearch
              id="id-service"
              control={control}
              name="search-proprietario"
              label="Tipo Endereço"
              placeholder="..."
              // error={errors.service?.message}
              options={[
                {
                  value: 'Apartamento - 01',
                  label: 'Apartamento - 01'
                },
                {
                  value: 'Residêncial - 02',
                  label: 'Residêncial - 02'
                }
              ]}
              onChange={() => console.log('clicou')}
            />
          </Col>
        </Row>

        <Row>
          <Col xs={3}>
            <SelectWithSearch
              id="id-service"
              control={control}
              name="search-proprietario"
              label="Tipo"
              placeholder="..."
              // error={errors.service?.message}
              options={[
                {
                  value: 'Rua',
                  label: 'Rua'
                },
                {
                  value: 'Alameda',
                  label: 'Alameda'
                }
              ]}
              onChange={() => console.log('clicou')}
            />
          </Col>
          <Col xs={7}>
            <Input
              register={register}
              type="text"
              label="Proprietário"
              placeholder={'...'}
              name="proprietario"
            />
          </Col>
          <Col xs={2}>
            <Input
              register={register}
              type="text"
              label="Número"
              placeholder={'...'}
              name="numero"
            />
          </Col>
          <Col xs={12}>
            <Input
              register={register}
              type="text"
              label="Complemento"
              placeholder={'...'}
              name="complemento"
            />
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <Input
              register={register}
              type="text"
              label="Apartamento número"
              placeholder={'...'}
              name="apartamento"
            />
          </Col>
          <Col xs={4}>
            <Input
              register={register}
              type="text"
              label="Edifício - Bloco ou Torre"
              placeholder={'...'}
              name="edificio"
            />
          </Col>
          <Col xs={4}>
            <Input
              register={register}
              type="text"
              label="Vaga"
              placeholder={'...'}
              name="vaga"
            />
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <Input
              register={register}
              type="text"
              label="N° ou Nome do Loteamento"
              placeholder={'...'}
              name="loteamento"
            />
          </Col>
          <Col xs={4}>
            <Input
              register={register}
              type="text"
              label="Quadra"
              placeholder={'...'}
              name="quadra"
            />
          </Col>
          <Col xs={4}>
            <Input
              register={register}
              type="text"
              label="Lote"
              placeholder={'...'}
              name="lote"
            />
          </Col>
        </Row>
        <Row>
          <Col xs={9}>
            <Input
              register={register}
              type="text"
              label="N° Contribuinte (IPTU)"
              placeholder={'...'}
              name="numero_contribuinte_iptu"
            />
          </Col>
          <Col xs={3}>
            <Input
              register={register}
              type="text"
              label="Código Postal - CEP"
              placeholder={'...'}
              name="postalCode"
              mask="maskPostalCode"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Input
              register={register}
              type="text"
              label="Observações"
              placeholder={'...'}
              name="obs"
              textarea={true}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={7} />
          <Col xs={3}>
            <SelectWithSearch
              id="id-service"
              control={control}
              name="search"
              label="Vias"
              placeholder="..."
              // error={errors.service?.message}
              options={[
                {
                  value: '1 via',
                  label: '1 via'
                },
                {
                  value: '2 vias',
                  label: '2 vias'
                },
                {
                  value: '3 vias',
                  label: '3 vias'
                },
                {
                  value: '4 vias',
                  label: '4 vias'
                }
              ]}
              onChange={() => console.log('clicou')}
            />
          </Col>
          <Col xs={1} className="d-flex align-items-end p-1">
            <Btn
              variant="outline-primary"
              size="lg"
              style={{ marginBottom: 4 }}
              block
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
            >
              <FontAwesomeIcon icon={faMinus} size={'1x'} />
            </Btn>
          </Col>
        </Row>
      </>
    )
  }

  const handleObs = () => {
    return (
      <Row>
        <Col className={'pr-0'}>
          <Input
            register={register}
            type="text"
            label="Observações"
            placeholder={'...'}
            name="obs"
            textarea={true}
          />
        </Col>
      </Row>
    )
  }

  return (
    <S.Wrapper>
      <Row>
        <Col xs={6}>
          <SelectWithSearch
            id="id-service"
            control={control}
            name="service"
            label="Tipo"
            placeholder="Informe o tipo..."
            // error={errors.service?.message}
            options={[
              {
                value: 'Filiação - 01',
                label: 'Filiação - 01'
              }
            ]}
            onChange={() => console.log('clicou')}
          />
        </Col>
        <Col xs={6}>
          <SelectWithSearch
            id="id-service"
            control={control}
            name="service"
            label="Custas"
            placeholder="Informe as custas..."
            // error={errors.service?.message}
            options={[
              {
                value: 'Custas integrais',
                label: 'Custas integrais'
              },
              {
                value: 'Menos 30% dos Emolumentos - 23',
                label: 'Menos 30% dos Emolumentos - 23'
              }
            ]}
            onChange={() => console.log('clicou')}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={3}>
          <SelectWithSearch
            id="id-service"
            control={control}
            name="search"
            label="Pesquisar por:"
            placeholder="Tipo de pesquisa..."
            // error={errors.service?.message}
            options={[
              {
                value: 'Endereço - 01',
                label: 'Endereço - 01'
              },
              {
                value: 'Nome - 02',
                label: 'Nome - 02'
              },
              {
                value: 'Matrícula - 03',
                label: 'Matrícula - 03'
              },
              {
                value: 'Transcrição - 04',
                label: 'Transcrição - 04'
              }
            ]}
            onChange={() => console.log('clicou')}
          />
        </Col>
        <Col xs={9} className="pr-4">
          {handleMatricula()}
          {handleObs()}
          {handleTranscricao()}
          {handleObs()}
          {handleNome()}
          {handleEndereco()}
        </Col>
      </Row>
    </S.Wrapper>
  )
}

export default DevolucaoExameCalculo
