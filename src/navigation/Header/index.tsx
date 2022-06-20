import Text from 'components/Text'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Props } from './interface'

const Header = ({ title, children }: Props) => (
  <Row className={`pb-1 mb-4 mt-0'`}>
    <Col className="my-auto">
      <Text
        className="align-middle  pb-3"
        label={title}
        color={'primary'}
        size={'xxxlarge'}
        weight={700}
      />
    </Col>
    {children && <Col className="text-right">{children}</Col>}
  </Row>
)

export { Header }
