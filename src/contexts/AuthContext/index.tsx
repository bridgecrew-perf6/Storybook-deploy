import jwt from 'jsonwebtoken'
import Router from 'next/router'
import { parseCookies, setCookie } from 'nookies'
import nookies from 'nookies'
import { createContext, useState } from 'react'
import { Props, SignInProps, SignInUserProps } from './interface'

export const AuthContext = createContext({} as Props)

export function AuthProvider({ children }: any) {
  const masAge: number = parseInt(process.env.JWT_EXPIRATION_TIME || '60')

  const {
    ['tecnocart.token']: token,
    ['tecnocart.user_id']: user_id,
    ['tecnocart.user_name']: name,
    ['tecnocart.user_email']: email
  } = parseCookies()

  const userCookies: SignInUserProps = {
    id: user_id,
    nome: name,
    email: email
  }

  const [user, setUser] = useState<SignInUserProps | null>(userCookies || null)

  setCookies(token, user_id, name, email)

  const isAuthenticated = !!user

  async function signIn({ user, token }: SignInProps) {
    const userPayload = {
      id: '1',
      nome: 'Danilo Ramon',
      email: 'daniloras84@gmail.com'
    }
    setUser(userPayload)
    console.log(user)
    setCookies(token, '1', 'Danilo Ramon', 'daniloras84@gmail.com')
    Router.push('../')
  }

  async function pageRestrict() {
    const { ['tecnocart.token']: token } = parseCookies()

    if (!process.env.JWT_TOKEN_SECRET) {
      Router.push(`/auth/login?errorName=JWT_TOKEN_SECRET`)
    }

    try {
      jwt.verify(token, process.env.JWT_TOKEN_SECRET || '')
    } catch (err: any) {
      Router.push(`/auth/login?errorName=${err.message}`)
    }
  }

  async function setCookies(
    token: string,
    userId: string,
    name: string,
    email: string
  ) {
    setCookie(undefined, 'tecnocart.token', token, {
      maxAge: masAge
    })

    setCookie(undefined, 'tecnocart.user_id', userId, {
      maxAge: masAge
    })

    setCookie(undefined, 'tecnocart.user_name', name, {
      maxAge: masAge
    })

    setCookie(undefined, 'tecnocart.user_email', email, {
      maxAge: masAge
    })
  }

  async function destroySection() {
    nookies.destroy(undefined, 'tecnocart.user_id')
    nookies.destroy(undefined, 'tecnocart.user_name')
    nookies.destroy(undefined, 'tecnocart.user_email')
    nookies.destroy(undefined, 'tecnocart.token')
    return true
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        signIn,
        pageRestrict,
        destroySection
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
