import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faQuestionCircle,
  fas,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import MenuItem from './components/Menu'
import { Props } from './interface'
import * as S from './styles'

library.add(fas)

const Navbar = ({ menuData, onChange }: Props) => {
  return (
    <S.Container>
      <S.ListWrapper>
        {menuData.map((item, index) => (
          <S.ListItem key={index} onClick={() => onChange(item)}>
            <MenuItem isActive={item.active} title={item.title}>
              <FontAwesomeIcon icon={['fas', item.icon]} size="lg" />
            </MenuItem>
          </S.ListItem>
        ))}
      </S.ListWrapper>
      <S.FooterMenu>
        <S.ListWrapper>
          <S.ListItem>
            <MenuItem isActive={false} title="Central de Ajuda">
              <FontAwesomeIcon icon={faQuestionCircle} size="lg" />
            </MenuItem>
          </S.ListItem>
          <S.ListItem>
            <MenuItem isActive={false} title="Sair">
              <FontAwesomeIcon icon={faSignOutAlt} size="lg" />
            </MenuItem>
          </S.ListItem>
        </S.ListWrapper>
      </S.FooterMenu>
    </S.Container>
  )
}

export { Navbar }
