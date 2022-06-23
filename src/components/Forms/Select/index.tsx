import Text from '../../Text'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import ReactSelect, { components } from 'react-select'
import { Props } from './interface'

const Select = ({ name, label, defaultValue, isInvalid, ...rest }: Props) => {
  const { control } = useForm({})

  const NoOptionsMessage = (props: any | unknown) => {
    return (
      <components.NoOptionsMessage {...props}>
        <span>😔 Nenhum registro encontrado! 👎</span>
      </components.NoOptionsMessage>
    )
  }

  return (
    <>
      <Text
        label={label}
        weight={500}
        color={'dark'}
        size={'small'}
        className="mb-1 pt-3"
      />
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <ReactSelect
            {...field}
            {...rest}
            className={`${
              isInvalid
                ? 'custom-react-select invalidForm'
                : 'custom-react-select'
            } `}
            components={{ NoOptionsMessage }}
          />
        )}
        defaultValue={defaultValue}
      />
      {isInvalid && (
        <Text
          label={'Campo obrigatório'}
          color="danger"
          size="xsmall"
          weight={300}
          className="pb-2 pt-2"
        />
      )}
    </>
  )
}

export default Select
