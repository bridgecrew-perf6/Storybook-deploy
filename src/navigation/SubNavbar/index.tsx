import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import { Image } from 'react-bootstrap'
import { Props } from './interface'
import * as S from './styles'

const SubNavbar = ({ menuData, title }: Props) => {
  return (
    <S.Container className={`mt-1`} key="tiel">
      <S.Div className="my-auto pb-3 pt-4">
        <Link href="/">
          <a>
            <Image
              src="/img/logo-13risp.png"
              width={220}
              fluid
              className="d-inlne align-middle ml-1"
            />
          </a>
        </Link>
      </S.Div>
      <S.Div className="p-2 mt-4 w-100">
        <S.TitleHeader>{title}</S.TitleHeader>
      </S.Div>
      {menuData.map((item, index) => (
        <S.Div className="p-2 w-100" key={index}>
          <S.Title>{item.title}</S.Title>
          {item.children?.map((i, _i) => (
            <S.Line key={_i}>
              <Link href={i.url} passHref>
                <S.Menu>
                  <S.MenuIcon>
                    <FontAwesomeIcon icon={faCaretRight} size="sm" fixedWidth />
                  </S.MenuIcon>
                  <S.MenuText>{i.title}</S.MenuText>
                </S.Menu>
              </Link>
            </S.Line>
          ))}
          <S.Divider />
        </S.Div>
      ))}
    </S.Container>
  )
}

export { SubNavbar }
