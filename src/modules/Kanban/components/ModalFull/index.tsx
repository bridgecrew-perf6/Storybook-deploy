import {
  faAngleDoubleRight,
  faBullhorn,
  faCalendarDay,
  faEllipsisH,
  faEye,
  faTimes
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Badge from 'components/Badge'
import Text from 'components/Text'
import React, { useEffect, useState } from 'react'
import {
  Col,
  Container,
  OverlayTrigger,
  Row,
  Tab,
  Tabs,
  Tooltip
} from 'react-bootstrap'
import Modal from 'react-modal'
import TabComments from '../TabComments'
import TabDefault from '../TabDefault'
import TabLogs from '../TabLogs'
import TabSendMessage from '../TabSendMessage'
import { Props } from './interface'
import * as S from './styles'

const ModalFull: React.FC<Props> = ({
  visible = false,
  card,
  children,
  ...rest
}) => {
  const [show, setShow] = useState(visible)
  const [keyTab, setKeyTab] = useState('default')

  useEffect(() => {
    console.log('Executando - UseEffect', visible)
    setShow(true)
  }, [visible])

  const customStyles = {
    content: {
      display: 'flex',
      FlexWrap: 'wrap',
      AlignContent: 'strech',
      top: '20px',
      left: '88px',
      right: '34px',
      bottom: '20px'
    }
  }

  return (
    <S.Wrapper>
      <Modal isOpen={show} style={customStyles} {...rest}>
        <S.Container>
          <S.Header>
            <Container fluid className="p-0 border-bottom">
              <Row>
                <Col className="d-inline">
                  <h3 className="d-inline">
                    <Badge
                      id="certidao"
                      label={card.description}
                      variant={'primary'}
                    />
                  </h3>
                  <FontAwesomeIcon
                    icon={faAngleDoubleRight}
                    className="m-1 ml-2 mr-2"
                  />
                  <Text
                    label={card.title}
                    color="primary"
                    size="xxlarge"
                    weight={700}
                    className="d-inline mr-2"
                  />
                  <FontAwesomeIcon
                    icon={faAngleDoubleRight}
                    className="m-1 ml-2 mr-2"
                  />
                  <Text
                    label={card.type}
                    color="primary"
                    size="xxlarge"
                    weight={500}
                    className="d-inline mr-2"
                  />
                </Col>
                <Col className="text-right">
                  <S.ListUl className="list-inline">
                    <S.ListLi className="list-inline-item">
                      <OverlayTrigger
                        placement="left"
                        overlay={
                          <Tooltip id="closed">Prazo para Registro</Tooltip>
                        }
                      >
                        <Badge
                          id="em-andamento"
                          label={'REALIZADO'}
                          variant="success"
                        />
                      </OverlayTrigger>
                    </S.ListLi>
                    <S.ListLi className="list-inline-item">
                      <FontAwesomeIcon
                        icon={faCalendarDay}
                        className="cursor-pointer ml-3 d-inline mr-3 text-secondary"
                      />
                      <OverlayTrigger
                        placement="left"
                        overlay={
                          <Tooltip id="closed">Prazo para Registro</Tooltip>
                        }
                      >
                        <Text
                          label={'20/10/2021'}
                          className="d-inline"
                          color="secondary"
                        />
                      </OverlayTrigger>
                    </S.ListLi>
                    <S.ListLi className="list-inline-item">
                      <OverlayTrigger
                        placement="left"
                        overlay={
                          <Tooltip id="closed">Reportar feedback</Tooltip>
                        }
                      >
                        <FontAwesomeIcon
                          icon={faBullhorn}
                          className="cursor-pointer ml-3"
                        />
                      </OverlayTrigger>
                    </S.ListLi>
                    <S.ListLi className="list-inline-item">
                      <OverlayTrigger
                        placement="left"
                        overlay={
                          <Tooltip id="closed">Acompanhar Protocolo</Tooltip>
                        }
                      >
                        <FontAwesomeIcon
                          icon={faEye}
                          className="cursor-pointer ml-3"
                        />
                      </OverlayTrigger>
                    </S.ListLi>
                    <S.ListLi className="list-inline-item">
                      <OverlayTrigger
                        placement="left"
                        overlay={
                          <Tooltip id="closed">Mais informações</Tooltip>
                        }
                      >
                        <FontAwesomeIcon
                          icon={faEllipsisH}
                          className="cursor-pointer ml-3"
                        />
                      </OverlayTrigger>
                    </S.ListLi>
                    <S.ListLi className="list-inline-item">
                      <OverlayTrigger
                        placement="left"
                        overlay={<Tooltip id="closed">Fechar</Tooltip>}
                      >
                        <FontAwesomeIcon
                          icon={faTimes}
                          onClick={() => setShow(false)}
                          className="cursor-pointer ml-3"
                        />
                      </OverlayTrigger>
                    </S.ListLi>
                  </S.ListUl>
                </Col>
              </Row>
            </Container>
          </S.Header>
          <S.Content>
            <S.Main>{children}</S.Main>
            <S.Sidebar className="border-left">
              <S.SidebarHeader>
                <Tabs
                  defaultActiveKey={keyTab}
                  id="tabs-card-modal"
                  activeKey={keyTab}
                  onSelect={(k: any) => setKeyTab(k)}
                >
                  <Tab eventKey="default" title="Principal">
                    <TabDefault />
                  </Tab>
                  <Tab eventKey="comments" title="Comentários">
                    <TabComments />
                  </Tab>
                  <Tab eventKey="logs" title="Histórico">
                    <TabLogs />
                  </Tab>
                </Tabs>
              </S.SidebarHeader>
              {keyTab === 'comments' && (
                <S.SidebarFooter>
                  <TabSendMessage />
                </S.SidebarFooter>
              )}
            </S.Sidebar>
          </S.Content>
        </S.Container>
      </Modal>
    </S.Wrapper>
  )
}

export default ModalFull
