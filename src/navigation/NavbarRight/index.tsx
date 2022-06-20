import { useQuery } from '@apollo/client'
import { faBell, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Text from 'components/Text'
import { GET_CLIENTES } from 'gql/auth'
import { Col, Container, Row } from 'react-bootstrap'
import { Props } from './interface'
import * as S from './styles'

const NavbarRight = ({ onChangeRight }: Props): JSX.Element => {
  const { loading, error, data } = useQuery(GET_CLIENTES)

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

  const notification = (
    title: string,
    description: string,
    icon: any,
    key: number
  ) => (
    <div key={key}>
      <Row>
        <Col xs={1}>
          <S.Icon>
            <FontAwesomeIcon icon={icon} size="1x" fixedWidth />
          </S.Icon>
        </Col>
        <Col>
          <Text label={title} color={'primary'} size={'normal'} weight={700} />
          <Text
            label={description}
            color={'dark'}
            size={'small'}
            weight={300}
          />
          <Text
            label={'02/09 15:32hs'}
            color={'info'}
            size={'xxsmall'}
            weight={300}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <hr />
        </Col>
      </Row>
    </div>
  )
  return (
    <S.Wrapper className={`mt-1`}>
      <Container>
        <Row>
          <Col>
            <S.SectionTitle onClick={() => onChangeRight()}>
              <Text
                className="text-left"
                label={'Notificações'}
                color={'primary'}
                size={'xxlarge'}
                weight={700}
              />
              <FontAwesomeIcon
                icon={faTimes}
                size="2x"
                fixedWidth
                className="text-secondary mt-1"
              />
            </S.SectionTitle>
          </Col>
        </Row>
        {data?.clientes.edges.map((i: any, index: number) =>
          notification(i.node.nome, i.node.email, faBell, index)
        )}
      </Container>
    </S.Wrapper>
  )
}

export { NavbarRight }
