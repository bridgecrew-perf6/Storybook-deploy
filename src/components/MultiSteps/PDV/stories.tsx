import React from 'react'
import PDV from '.'

export default {
  title: 'PDV',
  component: PDV,
  parameters: {
    docs: {
      description: {
        component: 'A simple PDV component'
      }
    }
  },
  argTypes: {
    id: {
      defaultValue: 'PDV-demo',
      table: {
        type: { summary: 'id único' },
        defaultValue: { summary: 'PDV-demo' }
      }
    },
    showNavigation: {
      defaultValue: true,
      options: [true, false],
      control: { type: 'radio', defaultStatus: true },
      table: {
        type: { summary: 'Devo apresentar a navegação?' },
        defaultValue: { summary: true }
      }
    },
    steps: {
      defaultValue: [
        { name: 'steep 1', status: 'WAITING' },
        { name: 'steep 2', status: 'WARNING' },
        { name: 'steep 3', status: 'DONE' },
        { name: 'steep 4', status: 'ERROR' }
      ],
      options: [{ name: '', status: ['DONE', 'WARNING', 'DONE', 'ERROR'] }],
      table: {
        type: { summary: 'tipos de navegação' },
        defaultValue: { summary: { name: 'Senha', status: 'DONE' } }
      }
    },
    permitedNavigation: {
      defaultValue: true,
      options: [true, false],
      control: { type: 'radio', defaultStatus: true },
      table: {
        type: { summary: 'tipos de permissões' },
        defaultValue: { summary: true }
      }
    }
  }
}
const Template = (args: any) => <PDV {...args} />
export const Default = Template.bind({})
