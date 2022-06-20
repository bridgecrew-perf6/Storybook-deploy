import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Props } from './interface'
import { BoxThemeToogle } from './styles'

const ToogleTheme: React.FC<Props> = ({ label, toogleTheme }) => {
  return (
    <BoxThemeToogle onClick={toogleTheme}>
      <FontAwesomeIcon
        icon={label === 'light' ? faMoon : faSun}
        size="1x"
        color={`white`}
      />
    </BoxThemeToogle>
  )
}

export default ToogleTheme
