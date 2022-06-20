import { AuthContext } from 'contexts/AuthContext'
import { NavbarRight } from 'navigation/NavbarRight'
import { NavbarTop } from 'navigation/NavbarTop'
import React, { useContext, useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { menuLists } from 'services/demoData/menuLists'
import { Navbar } from '../../navigation/Navbar'
import { SubNavbar } from '../../navigation/SubNavbar'
import { NavbarChildrenProps, NavigationProps, Props } from './interface'
import * as S from './styles'

const TemplateBase = (props: Props): JSX.Element => {
  const [verifyPage, setVerifyPage] = useState(false)
  const [toogleMenu, setToogleMenu] = useState(false)
  const [toogleMenuRight, setToogleMenuRight] = useState(false)
  const [layoutFluid, setLayoutFluid] = useState(false)
  const [titleSubMenu, setTitleSubMenu] = useState<string>(menuLists[0]?.title)
  const [menu, setMenu] = useState<NavigationProps[]>(menuLists)
  const [subMenu, setSubMenu] = useState<NavbarChildrenProps[]>(
    menuLists[0]?.children
  )
  const { pageRestrict } = useContext(AuthContext)

  const handleClickMenu = () => {
    setToogleMenu(!toogleMenu)
  }

  const handleClickMenuRight = () => {
    setToogleMenuRight(!toogleMenuRight)
    setToogleMenu(false)
  }

  const handleCLickLayoutFluid = () => {
    setLayoutFluid(!layoutFluid)
  }

  const handleSetSubmenu = (data: NavigationProps) => {
    setToogleMenu(true)
    const newObj = menu.map((item) => {
      setTitleSubMenu(data.title)
      return { ...item, active: item.title === data.title }
    })
    setMenu(newObj)
    setSubMenu(data.children)
  }

  useEffect(() => {
    if (verifyPage === false) {
      pageRestrict()
      setVerifyPage(true)
    }
  }, [pageRestrict, verifyPage])

  return (
    <>
      {verifyPage && (
        <S.Div className="wrapper d-flex align-items-stretch">
          <Navbar menuData={menu} onChange={handleSetSubmenu} />
          <div
            className={`animate ${
              !toogleMenu ? 'isOpenSidebar' : 'isCloseSidebar'
            }`}
          >
            <SubNavbar menuData={subMenu} title={titleSubMenu} />
          </div>
          <Container
            fluid={layoutFluid}
            className={`pr-0 pl-0 main bg-default`}
          >
            <NavbarTop
              isShowMenu={toogleMenu}
              isShowFluid={layoutFluid}
              onChange={handleClickMenu}
              onChangeRight={handleClickMenuRight}
              onChangeLayout={handleCLickLayoutFluid}
            />
            <Container fluid={layoutFluid}>{props.children}</Container>
          </Container>
          <div
            className={`animate ${
              !toogleMenuRight ? 'isOpenSidebarRight' : 'isCloseSidebarRight'
            }`}
          >
            <NavbarRight onChangeRight={handleClickMenuRight} />
          </div>
          =
        </S.Div>
      )}
    </>
  )
}

export { TemplateBase }
