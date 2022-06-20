import React from 'react'
import Alert from '.'

export default {
  title: 'Alert',
  component: Alert,
  parameters: {
    docs: {
      description: {
        component: 'A simple alert component'
      }
    }
  },
  argTypes: {
    id: {
      defaultValue: 'alert-success',
      table: {
        type: { summary: 'id único' },
        defaultValue: { summary: 'alert-success' }
      }
    },
    variant: {
      defaultValue: 'success',
      options: ['success', 'warning', 'info', 'danger'],
      control: { type: 'radio', defaultStatus: 'success' },
      table: {
        type: { summary: 'tipos de alerta' },
        defaultValue: { summary: 'success' }
      }
    },
    label: {
      defaultValue: 'Transação realizada com sucesso!',
      table: {
        type: { summary: 'descrição do alerta' },
        defaultValue: { summary: 'Transação realizada com sucesso!' }
      }
    }
  }
}
const Template = (args: never) => <Alert {...args} />
export const Default = Template.bind({})
