import { faCheck, faCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Badge as BadgeCustom } from 'react-bootstrap'
import { Props } from './interface'

const Badge: React.FC<Props> = ({
  id,
  label,
  variant,
  icon = 'check',
  hideIcon = false,
  size = 'lg'
}) => {
  const renderIcon = (value: string) => {
    switch (value) {
      case 'check':
        return <FontAwesomeIcon icon={faCheck} className="mr-1" />
      case 'dot':
        return <FontAwesomeIcon icon={faCircle} className="mr-1" />
    }
  }

  return (
    <BadgeCustom id={id} variant={variant}>
      {console.log(size)}
      {hideIcon && renderIcon(icon)} {label}
    </BadgeCustom>
  )
}

export default Badge
