import Usuarios from 'modules/Usuarios'
import { Header } from 'navigation/Header'
import React from 'react'
import { TemplateBase } from 'templates/Base'

const PageUsuarios = () => {
  return (
    <TemplateBase>
      <Header title="Usuários" />
      <Usuarios />
    </TemplateBase>
  )
}
export default PageUsuarios
