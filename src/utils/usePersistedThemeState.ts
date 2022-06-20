import { parseCookies, setCookie } from 'nookies'
import { useState, useEffect, Dispatch, SetStateAction } from 'react'

type Response<T> = [T, Dispatch<SetStateAction<T>>]

function usePersistedThemeState<T>(key: string, initialState: T): Response<T> {
  const maxAge: number = parseInt(process.env.JWT_EXPIRATION_TIME || '60')

  const [state, setState] = useState(() => {
    const { [key]: storageValue } = parseCookies()

    if (storageValue) {
      return JSON.parse(storageValue)
    } else {
      return initialState
    }
  })

  useEffect(() => {
    setCookie(undefined, key, JSON.stringify(state), {
      maxAge: maxAge
    })
  }, [key, maxAge, state])

  return [state, setState]
}

export default usePersistedThemeState
