import Login from 'modules/Auth/Login'
import React from 'react'
import { TemplateAuth } from 'templates/Auth'

const PageLogin = () => {
  return (
    <TemplateAuth>
      <Login />
    </TemplateAuth>
  )
}
export default PageLogin
