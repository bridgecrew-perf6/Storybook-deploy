import Kanban from 'modules/Kanban'
import React from 'react'
import { loadList } from 'services/demoData/loadLists'
import { TemplateBase } from 'templates/Base'

const PageKanbanCertidao = () => {
  return (
    <TemplateBase>
      <Kanban title="Certidão" typeList="certidao" data={loadList} />
    </TemplateBase>
  )
}
export default PageKanbanCertidao
