import {
  faCheckCircle,
  faExclamationTriangle,
  faInfoCircle,
  faTimesCircle
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Alert as AlertCustom } from 'react-bootstrap'
import nextId from 'react-id-generator'
import { Props } from './interface'

const Alert: React.FC<Props> = ({ label, variant }) => {
  const renderIcon = (value: string) => {
    switch (value) {
      case 'success':
        return (
          <FontAwesomeIcon icon={faCheckCircle} size="sm" className="mr-2" />
        )
      case 'warning':
        return (
          <FontAwesomeIcon
            icon={faExclamationTriangle}
            size="sm"
            className="mr-2"
          />
        )
      case 'info':
        return (
          <FontAwesomeIcon icon={faInfoCircle} size="sm" className="mr-2" />
        )
      case 'danger':
        return (
          <FontAwesomeIcon icon={faTimesCircle} size="sm" className="mr-2" />
        )
    }
  }

  return (
    <AlertCustom id={nextId()} variant={variant} className="mt-3 mb-3">
      {renderIcon(variant)} {label}
    </AlertCustom>
  )
}

export default Alert
