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
        type: { summary: 'tipos de variantes do botão' },
        defaultValue: { summary: 'success' }
      }
    },
    type: {
      defaultValue: 'button',
      options: ['button' , 'reset' , 'submit' ],
      control: { type: 'radio', defaultStatus: 'button' },
      table: {
        type: { summary: 'tipos de botões' },
        defaultValue: { summary: 'button' }
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
const Template = (args: any) => <Button {...args} />
export const Default = Template.bind({})



