import gql from 'graphql-tag'
import { typeDefs as scalarTypeDefs } from 'graphql-scalars'
import AccountSchema from './services/auth/typeDef.js'

const rootTypeDefs = gql`
  type Mutation {
    _: Boolean
  }

  type Query {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`
export default [
    rootTypeDefs,
    AccountSchema,
    ...scalarTypeDefs,
]
