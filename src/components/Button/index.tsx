import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button as ButtonCustom } from 'react-bootstrap'
import { Props } from './interface'

const Button: React.FC<Props> = ({
  id,
  className = '',
  variant,
  label = '',
  type,
  block = false,
  loading = false,
  disabled = false,
  onClick,
  ...rest
}) => {
  return (
    <ButtonCustom
      id={id}
      className={className}
      type={type}
      block={block}
      variant={variant === 'secondary' ? 'outline-secondary' : variant}
      disabled={!loading ? disabled : loading}
      onClick={onClick}
      style={{ height: 59 }}
      {...rest}
    >
      {loading ? (
        <FontAwesomeIcon icon={faSpinner} pulse={true} className="mr-2" />
      ) : (
        label
      )}
    </ButtonCustom>
  )
}

export default Button
