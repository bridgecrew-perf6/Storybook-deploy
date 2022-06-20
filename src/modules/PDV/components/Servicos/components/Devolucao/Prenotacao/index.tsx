import SelectWithSearch from 'components/Forms/Select'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import * as S from './styles'

const DevolucaoPrenotacao: React.FC = () => {
  const { control } = useForm({})

  return (
    <S.Wrapper>
      <Row className="d-flex align-items-end">
        <Col xs={12}>
          <SelectWithSearch
            id="id-service"
            control={control}
            name="service"
            label="Apresentante"
            placeholder="Informe o nome ou CPF do apresentante"
            // error={errors.service?.message}
            options={[
              {
                value: 'Danilo Ramon Alves da Silva - CPF 317.012.868-07',
                label: 'Danilo Ramon Alves da Silva - CPF 317.012.868-07'
              },
              {
                value: 'Gabriel Wathely - CPF 321.312.312-33',
                label: 'Gabriel Wathely - CPF 321.312.312-33'
              }
            ]}
          />
        </Col>
      </Row>
    </S.Wrapper>
  )
}

export default DevolucaoPrenotacao
