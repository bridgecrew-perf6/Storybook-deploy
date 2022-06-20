import { addDecorator } from '@storybook/react'
import { withNextRouter } from 'storybook-addon-next-router'
import '../.next/static/css/fefc71a46f50c686da45.css'
import GlobalStyles from '../src/styles/global'

addDecorator(withNextRouter())

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  )
]
