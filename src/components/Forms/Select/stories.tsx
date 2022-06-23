import React from 'react'
import { useForm } from 'react-hook-form'
import Select from '.'

export default {
  title: 'Select',
  component: Select,
  parameters: {
    docs: {
      description: {
        component: 'A simple Select component'
      }
    }
  },
  argTypes: {
    id: {
      defaultValue: 'Select-demo',
      table: {
        type: { summary: 'id único' },
        defaultValue: { summary: 'button-demo' }
      }
    },
    options: {
      defaultValue: [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ],
      table: {
        type: { sumary: 'Descrição do name' },
        defaultValue: { summary: 'name' }
      }
    },
    name: {
      defaultValue: 'name',
      table: {
        type: { sumary: 'Descrição do name' },
        defaultValue: { summary: 'name' }
      }
    },

    control: {
      disabled: true,
      table: {
        type: { summary: 'descrição do botão' },
        defaultValue: { summary: 'Cadastrar' }
      }
    },

    label: {
      defaultValue: 'Label',
      table: {
        type: { summary: 'descrição do label' },
        defaultValue: { summary: 'label' }
      }
    }
  }
}
const Template = (args: any) => {
  const { control } = useForm({})
  return <Select {...args} control={control} />
}
export const Default = Template.bind({})
