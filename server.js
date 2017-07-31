import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';
import { schema } from './schema';
var winston = require('winston');
winston.level = 'debug'

const GRAPHQL_PORT = 3000;

const app = express();

app.use((req, res, next) => {
  winston.debug("---------- begin GraphQL request", new Date())
  next()
})

app.use(bodyParser.json());

app.use((req, res, next) => {
  const {query, variables, operationName} = req.body;
  const opOut = operationName != null ? `${operationName}` : ''
  const varOut = variables != null ? `, ${JSON.stringify(variables)}` : ''
  const outline = `${new Date()} GRAPHQL: ${opOut}${varOut}\n${query}`;
  winston.debug(outline);
  next()
})


// the endpoint to be used by clients
app.use('/graphql',
graphqlExpress(request => ({
  schema: schema,
  context: {
    customerId: request.header("deadsecure"),
  },
  debug: true,
})
));

// endpoint to serve graphiql; not required; shouldn't use in production
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.use((req, res, next) => {
  winston.debug("---------- end GraphQL request", new Date())
  next()
})


app.listen(GRAPHQL_PORT, () => console.log(
  `GraphiQL is now running on http://localhost:${GRAPHQL_PORT}/graphiql`
));
