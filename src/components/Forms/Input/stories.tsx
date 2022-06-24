import React from 'react'
import { useForm } from 'react-hook-form'
import Input from '.'

export default {
  title: 'Input',
  component: Input,
  parameters: {
    docs: {
      description: {
        component: 'A simple Input component'
      }
    }
  },
  argTypes: {
    id: {
      defaultValue: 'Input-demo',
      table: {
        type: { summary: 'id único' },
        defaultValue: { summary: 'button-demo' }
      }
    },

    placeholder: {
      defaultValue: 'placeholder',
      table: {
        type: { summary: 'descrição do botão' },
        defaultValue: { summary: 'Cadastrar' }
      }
    },
    register: {
      defaultValue: (e: any) => {
        e
      },
      table: {
        type: { summary: 'descrição do botão' },
        defaultValue: { summary: 'Cadastrar' }
      }
    },
    control: {
      disabled: true,
      table: {
        type: { summary: 'descrição do botão' },
        defaultValue: { summary: 'Cadastrar' }
      }
    },
    size: {
      defaultValue: 'success',
      options: ['lg', 'sm'],
      control: { type: 'radio', defaultStatus: 'sm' },
      table: {
        type: { summary: 'tipos de alerta' },
        defaultValue: { summary: 'lg' }
      }
    },
    label: {
      defaultValue: 'Label',
      table: {
        type: { summary: 'descrição do label' },
        defaultValue: { summary: 'label' }
      }
    },
    mask: {
      options: [
        'maskCPF',
        'maskCurrencyBRL',
        'maskDateBRL',
        'maskPostalCode',
        'maskPhone',
        'maskMobile'
      ],
      control: { type: 'radio' },
      table: {
        type: { summary: 'tipos de mascara' }
      }
    },
    onChange: {
      defaultValue: (e: any) => {
        e.target.value
      },
      table: {
        type: { summary: 'descrição do botão' },
        defaultValue: { summary: 'Cadastrar' }
      }
    },
    value: {
      control: {
        disable: true
      }
    },
    error: {
      defaultValue: false,
      options: [true, false],
      constrol: { type: 'radio' },
      table: {
        type: { summary: 'descrição da error' },
        defaultValue: { summary: false }
      }
    }
  }
}
const Template = (args: any) => {
  const { control } = useForm({})
  return <Input {...args} control={control} />
}
export const Default = Template.bind({})
