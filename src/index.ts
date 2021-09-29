import cors from 'cors'
require('dotenv').config()
import { db } from './memory-database'

import { ApolloServer, gql } from 'apollo-server'
import typeDefs from './graphql/types'
import resolvers from './graphql/resolvers'

const port = process.env.PORT || 3000

// Connect to In-Memory DB
;(async () => await db({ test: false }))()

const server = new ApolloServer({
    typeDefs,
    resolvers,
    cors: { credentials: true, origin: '*' },
})

// The `listen` method launches a web server.
;(async () => await server.listen({ port }))()
export default server
