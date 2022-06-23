import React from 'react'
import Text from '.'

export default {
  title: "Text",
  component:Text,
  parameters: {
    docs: {
      description: {
        component: 'A simple Text component'
      }
    }
  },
    argTypes: {
  size:{
    defaultValue: 'medium',
    options: ['xxxxsmall','xxxsmall','xxsmall','xsmall','small','medium','large','xlarge','xxlarge','xxxlarge','xxxxlarge' ],
    control: { type: 'radio', defaultStatus: 'medium' },
    table: {
        type: { summary: 'Tamanhos de font' },
        defaultValue: { summary: 'medium' }
      }
  },
  color:{
    defaultValue: 'dark',
    options: ['white','primary','secondary','success','info','warning', 'danger','light','dark','grey','background','backgroundNavbar','textDefault',
    'textWithBackground','textLink',  ],
    control: { type: 'radio', defaultStatus: 'dark' },
    table: {
        type: { summary: 'Tipos de cores' },
        defaultValue: { summary: 'dark' }
      }
  },
  label: {
      defaultValue: 'Exemplo de texto!',
      table: {
        type: { summary: 'descrição do texto' },
        defaultValue: { summary: 'Exemplo de texto' }
      }
    }
  }
}
const Template = (args: any) => <Text {...args} />
export const Default = Template.bind({})
