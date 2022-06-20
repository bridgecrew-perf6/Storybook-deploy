import {
  ApolloClient,
  ApolloLink,
  concat,
  HttpLink,
  InMemoryCache
} from '@apollo/client'
import Cookies from 'js-cookie'

const token = Cookies.get('tecnocart.token') || null
const getToken = token ? `Bearer ${token}` : 'Not Authenticated'

const httpLink = new HttpLink({
  uri: process.env.APOLLO_GRAPH_URI
})

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: `${getToken}`
    }
  }))

  return forward(operation)
})

const graphql = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink)
})

export default graphql
