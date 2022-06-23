import React from 'react'
import ToogleTheme from '.'

export default {
  title: 'ToogleTheme',
  component: ToogleTheme,
  parameters: {
    docs: {
      description: {
        component: 'Componente de toogle do thema dark e light'
      }
    }
  },
  argTypes: {
    label: {
      defaultValue: true,
      options: [true, false],
      control: { type: 'radio', defaultStatus: true },
      table: {
        type: { summary: 'Toogle?' },
        defaultValue: { summary: true }
      }
    }
  }
}
const Template = (args: any) => <ToogleTheme {...args} />
export const Default = Template.bind({})
