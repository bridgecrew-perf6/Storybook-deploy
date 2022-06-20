import { Props } from './interface'

const delay = (amount = 750) =>
  new Promise((resolve) => setTimeout(resolve, amount))

export async function signInRequest(data: Props) {
  console.info('requestLogin', data)

  await delay()

  return {
    token: '111',
    user: {
      name: 'Diego Fernandes',
      email: 'diego@rocketseat.com.br',
      avatar_url: 'https://github.com/diego3g.png'
    }
  }
}

export async function recoverUserInformation() {
  await delay()

  return {
    user: {
      name: 'Diego Fernandes',
      email: 'diego@rocketseat.com.br',
      avatar_url: 'https://github.com/diego3g.png'
    }
  }
}
