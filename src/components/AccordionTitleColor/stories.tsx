import React from 'react'
import AccordionTitleColor from '.'


export default {
  title: 'AccordionTitleColor',
  component: AccordionTitleColor,
  parameters: {
    docs: {
      description: {
        component: 'A simple Title component'
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
    color: {
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
    },
     count: {
      defaultValue: 4,
      table: {
        type: { summary: 'descrição do alerta' },
        defaultValue: { summary: 4 }
      }
    }
  }
}
const Template = (args: any) => <AccordionTitleColor {...args} />
export const Default = Template.bind({})
