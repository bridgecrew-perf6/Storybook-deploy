import React from 'react'
import Badge from '.'

export default {
  title: 'Badge',
  component: Badge,
  parameters: {
    docs: {
      description: {
        component: 'A simple badge component'
      }
    }
  },
  argTypes: {
    id: {
      defaultValue: 'badge-demo',
      table: {
        type: { summary: 'id único' },
        defaultValue: { summary: 'badge-demo' }
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
    icon: {
      defaultValue: 'check',
      options: ['check', 'dot'],
      control: { type: 'radio', defaultStatus: 'check' },
      table: {
        type: { summary: 'tipos de ícone' },
        defaultValue: { summary: 'check' }
      }
    },
    label: {
      defaultValue: 'Descrição de utilização',
      table: {
        type: { summary: 'descrição do alerta' },
        defaultValue: { summary: 'Descrição de utilização' }
      }
    }
  }
}
const Template = (args: never) => <Badge {...args} />
export const Default = Template.bind({})
