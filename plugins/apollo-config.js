import {
  InMemoryCache,
  IntrospectionFragmentMatcher,
} from 'apollo-cache-inmemory'

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: {
    __schema: {
      types: [],
    },
  },
})

export default function () {
  return {
    httpEndpoint: process.env.graphqlUrl,
    cache: new InMemoryCache({ fragmentMatcher }),
    defaultHttpLink: false,
  }
}
