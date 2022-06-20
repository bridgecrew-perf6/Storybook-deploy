export interface UserProps {
  name: string
  email: string
  avatar_url: string
}

export interface SignInProps {
  user: SignInUserProps
  token: string
}

export interface SignInUserProps {
  id: string
  nome: string
  email: string
}

export interface Props {
  user: SignInUserProps | null
  isAuthenticated: boolean
  signIn: (data: SignInProps) => Promise<void>
  pageRestrict: () => Promise<void>
  destroySection: () => Promise<boolean>
}
