import Kanban from 'modules/Kanban'
import React from 'react'
import { loadListStep } from 'services/demoData/loadListStep'
import { TemplateBase } from 'templates/Base'

const PageKanbanContraditorio = () => {
  return (
    <TemplateBase>
      <Kanban
        title="Certidão » Contraditório"
        typeList="step"
        data={loadListStep}
      />
    </TemplateBase>
  )
}
export default PageKanbanContraditorio
