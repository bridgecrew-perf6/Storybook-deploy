import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Text from 'components/Text'
import React, { useState } from 'react'
import { Badge as BadgeCustom } from 'react-bootstrap'
import { Props } from './interface'

const AccordionTitleColor: React.FC<Props> = ({
  id,
  label,
  color,
  count = 4
}) => {
  const [show, setShow] = useState(false)

  return (
    <>
      <BadgeCustom
        id={id}
        variant={color}
        onClick={() => setShow(!show)}
        className="float-left"
      >
        <FontAwesomeIcon
          icon={!show ? faChevronUp : faChevronDown}
          className="mr-1"
        />{' '}
        {label}
      </BadgeCustom>
      <Text
        className="pb-2 ml-2 float-left"
        label={
          count === 0
            ? 'Nenhum protocolo'
            : count === 1
            ? '1 protocolo'
            : `${count} protocolos`
        }
        weight={300}
        size={'xsmall'}
        color="primary"
      />
    </>
  )
}

export default AccordionTitleColor
