import Text from 'components/Text'
import React, { useCallback } from 'react'
import { Form } from 'react-bootstrap'
import {
  maskCPF,
  maskCurrencyBRL,
  maskDateBRL,
  maskMobile,
  maskPhone,
  maskPostalCode
} from 'utils/masks'
import { Props } from './interface'
import { Controller } from 'react-hook-form'

const Input: React.FC<Props> = ({
  name,
  type = 'text',
  label,
  placeholder = 'Preencha esse campo',
  disabled = false,
  control,
  error,
  size = 'lg',
  textarea = false,
  mask = 'default',
  ...rest
}) => {
  const handleKeyUp = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      switch (mask) {
        case 'maskPostalCode':
          maskPostalCode(e)
          break
        case 'maskDateBRL':
          maskDateBRL(e)
          break
        case 'maskCurrencyBRL':
          maskCurrencyBRL(e)
          break
        case 'maskCPF':
          maskCPF(e)
          break
        case 'maskMobile':
          maskMobile(e)
          break
        case 'maskPhone':
          maskPhone(e)
          break
        default:
          break
      }
    },
    [mask]
  )

  return (
    <>
      <Text
        label={label}
        color={error ? 'danger' : 'textDefault'}
        size="small"
        weight={500}
        className="pb-1 pt-3"
      />
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <Form.Control
            type={type}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            size={size}
            className={error ? 'invalidForm' : ''}
            disabled={disabled}
            ref={ref}
            onKeyUp={handleKeyUp}
            as={textarea ? 'textarea' : undefined}
            rows={textarea ? 3 : 1}
            value={value}
            {...rest}
          />
        )}
      />
      {error && (
        <Text
          label={error ? error.toString() : ''}
          color="danger"
          size="xsmall"
          weight={300}
          className="pb-2 pt-2"
        />
      )}
    </>
  )
}

export default Input
