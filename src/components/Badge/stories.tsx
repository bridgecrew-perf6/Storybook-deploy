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
    },
    hideIcon: {
      defaultValue: 'Descrição de utilização',
      options: [true, false],
      control: { type: 'radio', defaultStatus: true },
      table: {
        type: { summary: 'descrição do icone' },
        defaultValue: { summary: true }
      }
    }
     /*    size: {
      defaultValue: 'Descrição de utilização',
      options: ['lg', 'md', 'sm'],
      control: { type: 'radio', defaultStatus: 'lg' },
      table: {
        type: { summary: 'descrição dos tamanhos' },
        defaultValue: { summary: 'Descrição de utilização' }
      }
    } */
  }
}
const Template = (args: any) => <Badge {...args} />
export const Default = Template.bind({})
