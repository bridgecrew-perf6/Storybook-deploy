import { useQuery } from '@apollo/client'
import Text from 'components/Text'
import { GET_USUARIOS } from 'gql/auth'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ListTable from './components/ListTable'

const Usuarios = () => {
  const { loading, error, data } = useQuery(GET_USUARIOS)
  if (loading)
    return (
      <>
        <Text label="Loading..." size="large" color="primary" />
      </>
    )
  if (error)
    return (
      <>
        <Text label={`Error! ${error.message}`} size="large" color="primary" />
      </>
    )

  return (
    <>
      <Row>
        <Col>
          <Text
            className="mb-4"
            label="Listagem de usuários com acesso ao sistema da Tecnocart. Recomendamos manter essa listagem sempre atualizada, garantindo sempre o acesso e convite ativo para os envolvidos."
            weight={300}
            size={'medium'}
            color="grey"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <ListTable data={data?.usuarios.edges} />
        </Col>
      </Row>
    </>
  )
}

export default Usuarios
