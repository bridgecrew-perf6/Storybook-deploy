import AlterarSenha from 'modules/MeuPerfil/AlterarSenha'
import MeusDados from 'modules/MeuPerfil/MeusDados'
import { Header } from 'navigation/Header'
import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import { TemplateBase } from 'templates/Base'

const PageMeuPerfil = () => {
  return (
    <TemplateBase>
      <Tabs defaultActiveKey="myProfile" id={'myProfile'} className="mb-3">
        <Tab eventKey="myProfile" title={'Meu Perfil'}>
          <Header title="Meu perfil" />
          <MeusDados />
        </Tab>
        <Tab eventKey="updatePassword" title="Alterar Senha">
          <Header title="Alterar Senha" />
          <AlterarSenha />
        </Tab>
      </Tabs>
    </TemplateBase>
  )
}
export default PageMeuPerfil
