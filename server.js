const express = require('express')
const dotenv = require('dotenv')
const expressGraphQL = require('express-graphql').graphqlHTTP
const schema = require('./schema/schema')
const app = express()

dotenv.config({
    path: './config/config.env'
})

app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true,
}))

app.listen(4000, () => {
    console.log('Server is running on port 4000')
})