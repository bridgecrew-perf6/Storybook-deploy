import { OptionTypeBase, Props as SelectProps } from 'react-select'

export interface Props extends SelectProps<OptionTypeBase> {
  name: string
  label: string
  defaultValue?: DefaultValueProps
  isInvalid: boolean
}

export interface DefaultValueProps {
  value: string
  label: string
}
