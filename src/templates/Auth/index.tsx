import Link from 'next/link'
import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { Props } from './interface'
import * as S from './styles'

const TemplateAuth = (props: Props) => {
  return (
    <Container className="container-fluid  overflow-hidden h-100 p-0 " fluid>
      <Row className="row justify-content-center h-100 p-0 ">
        <Col xl={4} lg={4} md={6} sm={12} xs={12} className="my-auto p-5">
          <Row>
            <Col xl={10} lg={10} md={10} sm={10} xs={10} className="mx-auto">
              {/* <Image
                src="/img/logo-13risp.png"
                height={80}
                className="mb-5 d-block"
              /> */}
              {props?.children}
            </Col>
          </Row>
        </Col>
        <Col
          xl={8}
          lg={8}
          md={6}
          sm={12}
          xs={12}
          className="bg-login d-md-block h-100"
        >
          <S.Copyright>
            <Link href="https://tecnocart.com.br">
              <a target="_blank">
                <Image
                  src="/img/logo-tecnocart.png"
                  height={20}
                  className="mb-5 d-block logo-tecnocart-login"
                />
              </a>
            </Link>
          </S.Copyright>
        </Col>
      </Row>
    </Container>
  )
}

export { TemplateAuth }
