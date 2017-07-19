import {
  GraphQLList,
  GraphQLSchema,
  GraphQLObjectType,
} from 'graphql';
import { OrdersQuery } from './Order';
import { ProductBySKUQuery } from './Product'
import {
  CustomerByIdQuery,
  CustomerByEmailQuery,
  CustomersQuery,
  CustomerLoginMutation,
} from './Customer';

const query = new GraphQLObjectType({
  description: 'global query object',
  name: 'Query',
  fields: {
    orders: OrdersQuery,
    customerById: CustomerByIdQuery,
    customerByEmail: CustomerByEmailQuery,
    productBySKU: ProductBySKUQuery,
  },
});

const mutation = new GraphQLObjectType({
  description: 'global mutation object',
  name: 'Mutation',
  fields: {
    login: CustomerLoginMutation,
  },
});


export const schema = new GraphQLSchema({
  query: query,
  mutation: mutation,
});
