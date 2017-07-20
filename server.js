import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import bodyParser from 'body-parser';
import { schema } from './schema';
import morgan from 'morgan';


const GRAPHQL_PORT = 3000;

const app = express();

// define a custom log style for graphQL
morgan.token('graphql-query', (req) => {
    const {query, variables, operationName} = req.body;
    return `${new Date()} GRAPHQL: \nOperation Name: ${operationName} \nQuery: ${query} \nVariables: ${JSON.stringify(variables)}`;
  });

  // parse the body first so it can be used in the logger
  app.use(bodyParser.json());

  // establish the custom log style for logging; should NOT be done in production!!
  app.use(morgan(':graphql-query'));


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

app.listen(GRAPHQL_PORT, () => console.log(
  `GraphiQL is now running on http://localhost:${GRAPHQL_PORT}/graphiql`
));
