import React from 'react'
import PdvResumeOrder from '.'

export default {
  title: 'PdvResumeOrder',
  component: PdvResumeOrder,
  parameters: {
    docs: {
      description: {
        component: 'A simple PdvResumeOrder component'
      }
    }
  },
  argTypes: {
    titleNextStep: {
      defaultValue: 'Próximo',
      table: {
        type: { summary: 'id único' },
        defaultValue: { summary: 'PdvResumeOrder-demo' }
      }
    },
    titleBackStep: {
      defaultValue: 'Anterior',
      table: {
        type: { summary: 'id único' },
        defaultValue: { summary: 'PdvResumeOrder-demo' }
      }
    },
    handleStep: {
      defaultValue: () => {'nextStep'},
      options: ['nextStep', 'goBack'],
      table: {
        type: { summary: 'tipos de navegação' },
        defaultValue: () => {'nextStep'}
      }
    },
    prices: {
      defaultValue: {descontos: 10},
      table: {
        type: { summary: 'tipos de permissões' },
        defaultValue: { summary: 'Número' }
      }
    },
  }
}
const Template = (args: any) => <PdvResumeOrder {...args} />
export const Default = Template.bind({})




