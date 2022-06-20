import {
  faAlignLeft,
  faBell,
  faChevronLeft,
  faCompressAlt,
  faExpand,
  faExpandAlt,
  faSignOutAlt,
  faUserCircle
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AuthContext } from 'contexts/AuthContext'
import Link from 'next/link'
import React, { useContext } from 'react'
import { Col, Dropdown, Image, Row } from 'react-bootstrap'
import { Props } from './interface'
import * as S from './styles'

const NavbarTop = ({
  isShowMenu,
  isShowFluid,
  onChange,
  onChangeRight,
  onChangeLayout
}: Props) => {
  const { user } = useContext(AuthContext)

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen()
      }
    } else {
      document.exitFullscreen()
    }
  }

  return (
    <S.BoxShadow>
      <Row className="m-0 p-0">
        <Col className="my-auto">
          <S.ListUl className="list-inline">
            <S.ListLi className="list-inline-item">
              <FontAwesomeIcon
                onClick={() => onChange()}
                icon={isShowMenu ? faChevronLeft : faAlignLeft}
                size="lg"
              />
            </S.ListLi>
          </S.ListUl>
        </Col>
        <Col className="text-right my-auto">
          <S.ListUl className="list-inline">
            <S.ListLi className="list-inline-item">
              {isShowFluid && (
                <FontAwesomeIcon
                  icon={faCompressAlt}
                  size="lg"
                  className="ml-2 mr-2"
                  onClick={() => onChangeLayout()}
                />
              )}
              {!isShowFluid && (
                <FontAwesomeIcon
                  icon={faExpandAlt}
                  size="lg"
                  className="ml-2 mr-2"
                  onClick={() => onChangeLayout()}
                />
              )}
            </S.ListLi>
            <S.ListLi className="list-inline-item">
              <FontAwesomeIcon
                icon={faBell}
                size="lg"
                className="ml-2 mr-2"
                onClick={() => onChangeRight()}
              />
            </S.ListLi>
            <S.ListLi className="list-inline-item">
              <FontAwesomeIcon
                icon={faUserCircle}
                size="lg"
                className="ml-2 mr-2"
              />
            </S.ListLi>

            <Image
              src={'/img/user-default.png'}
              roundedCircle
              className="bg-black image-cover"
              thumbnail
              height={60}
              width={60}
            />

            <S.ListLi className="list-inline-item  ">
              <Dropdown>
                <Dropdown.Toggle variant="custom" id="dropdown-basic">
                  {user?.nome}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Link href="/meu-perfil">
                      <a>Meu Perfil</a>
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Ajuda</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item>
                    <Link href="/auth/login">
                      <a>Sair</a>
                    </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </S.ListLi>
            <S.ListLi className="list-inline-item">
              <FontAwesomeIcon
                icon={faExpand}
                size="lg"
                className="ml-2 mr-2"
                onClick={() => toggleFullScreen()}
              />
            </S.ListLi>
            <S.ListLi className="list-inline-item">
              <Link href="/auth/login">
                <a>
                  <FontAwesomeIcon
                    icon={faSignOutAlt}
                    size="lg"
                    className="ml-2 mr-2"
                  />
                </a>
              </Link>
            </S.ListLi>
          </S.ListUl>
        </Col>
      </Row>
    </S.BoxShadow>
  )
}
export { NavbarTop }
