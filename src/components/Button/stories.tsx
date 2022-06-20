import React from 'react'
import Button from '.'

export default {
  title: 'Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'A simple button component'
      }
    }
  },
  argTypes: {
    id: {
      defaultValue: 'button-demo',
      table: {
        type: { summary: 'id único' },
        defaultValue: { summary: 'button-demo' }
      }
    },
    variant: {
      defaultValue: 'success',
      options: ['success', 'secondary', 'danger'],
      control: { type: 'radio', defaultStatus: 'success' },
      table: {
        type: { summary: 'tipos de botões' },
        defaultValue: { summary: 'success' }
      }
    },
    label: {
      defaultValue: 'Cadastrar',
      table: {
        type: { summary: 'descrição do botão' },
        defaultValue: { summary: 'Cadastrar' }
      }
    }
  }
}
const Template = (args: never) => <Button {...args} />
export const Default = Template.bind({})
