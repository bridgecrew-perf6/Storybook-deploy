/* eslint-disable @typescript-eslint/no-unused-vars */
import Badge from 'components/Badge'
import Text from 'components/Text'
import React, { useState } from 'react'
import { Col, Form, ListGroup, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

const TabDefault: React.FC = ({ ...rest }) => {
  const { handleSubmit } = useForm()

  const [, setLoading] = useState<boolean>(false)

  const handleData = async (data: any) => {
    try {
      setLoading(true)
      console.log(data)
      setLoading(false)
    } catch (err) {
      console.log(err)
      setLoading(false)
    }
  }

  return (
    <Form onSubmit={handleSubmit(handleData)}>
      <Row>
        <Col>
          <ListGroup className="mt-3" horizontal style={{ width: '100%' }}>
            <ListGroup.Item>
              <Text label="Prazo Registro:" color="secondary" size="xxsmall" />
              <Text
                label="20/11/2021"
                color="dark"
                size="medium"
                weight={300}
              />
              <Badge
                id="prazo-para-registro"
                label={'Realizado'}
                variant="success"
              />
              <Text label="2h 15m" color="dark" size="xxsmall" weight={500} />
            </ListGroup.Item>
            <ListGroup.Item>
              <Text label="Prazo devolução:" color="secondary" size="xxsmall" />
              <Text
                label="15/11/2021"
                color="dark"
                size="medium"
                weight={300}
              />
              <Badge id="em-atraso" label={'Atenção'} variant="warning" />
              <Text
                label="2D 2h 15m"
                color="dark"
                size="xxsmall"
                weight={500}
              />
            </ListGroup.Item>
            <ListGroup.Item>
              <Text
                label="Prenotação válida:"
                color="secondary"
                size="xxsmall"
              />
              <Text
                label="01/11/2007"
                color="dark"
                size="medium"
                weight={300}
              />
              <Badge id="em-atraso" label={'Em Atraso'} variant="danger" />
              <Text
                label="4D 20h 15m"
                color="dark"
                size="xxsmall"
                weight={500}
              />
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <ListGroup className="mt-3" variant="flush">
            <ListGroup.Item>
              <Text label="Apresentante:" color="secondary" size="xxsmall" />
              <Text
                label="Danilo Ramon Alves da Silva"
                color="dark"
                size="medium"
                weight={300}
              />
            </ListGroup.Item>
            <ListGroup.Item>
              <Text label="Contato:" color="secondary" size="xxsmall" />
              <Text
                label="João Carlos Silva"
                color="dark"
                size="medium"
                weight={300}
              />
            </ListGroup.Item>
            <ListGroup.Item>
              <Text label="Celular:" color="secondary" size="xxsmall" />
              <Text
                label="(11) 95442-6650"
                color="dark"
                size="medium"
                weight={300}
              />
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Form>
  )
}

export default TabDefault
