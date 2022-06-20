import React from 'react'
import { OverlayTrigger, Popover } from 'react-bootstrap'
import { Props } from './interface'
import * as S from './styles'

const Menu = ({ title, isActive, children }: Props) => (
  <OverlayTrigger
    trigger={['focus']}
    delay={{ show: 250, hide: 400 }}
    placement="right"
    overlay={
      <Popover id={title}>
        <Popover.Content>{title}</Popover.Content>
      </Popover>
    }
  >
    <S.Wrapper isActive={isActive}>{children}</S.Wrapper>
  </OverlayTrigger>
)

export default Menu
