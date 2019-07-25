const express = require('express');
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express();

app.use(cors())

mongoose.connect('')
mongoose.connection.once('open', () => {
    console.log('connected to the db')
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true
}));

app.listen(4000,() => {
    console.log('now listening requests on port 4000')
});