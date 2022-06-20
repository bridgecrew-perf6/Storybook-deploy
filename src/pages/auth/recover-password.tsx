import Recovey from 'modules/Auth/Recovery'
import { useRouter } from 'next/router'
import React from 'react'
import { TemplateAuth } from 'templates/Auth'

const PageRecovery = () => {
  const router = useRouter()

  const { token, typeUser } = router.query
  return (
    <TemplateAuth>
      {token && typeUser && token.length > 0 && typeUser.length > 0 && (
        <Recovey token={token} typeUser={typeUser} />
      )}
    </TemplateAuth>
  )
}

export default PageRecovery
