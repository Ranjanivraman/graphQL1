import {
  GraphQLList,
  GraphQLSchema,
  GraphQLObjectType,
} from 'graphql';

import { OrdersQuery } from './Order';
import {
  CustomerByIdQuery,
  CustomerByEmailQuery,
  CustomersQuery
} from './Customer';

const query = new GraphQLObjectType({
  description: 'global query object',
  name: 'Query',
  fields: {
    orders: OrdersQuery,
    customerById: CustomerByIdQuery,
    customerByEmail: CustomerByEmailQuery,
  },
});

export const schema = new GraphQLSchema({
  query: query,
});
