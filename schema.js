import {
  GraphQLList,
  GraphQLSchema,
  GraphQLObjectType,
} from 'graphql';
import { OrdersQuery } from './Order';
import { ProductBySKUQuery } from './Product'
import {
  ConnectedCustomerQuery,
  CustomerByEmailQuery,
  CustomersQuery,
  CustomerConnectMutation,
  CustomerUpdateMutation,
} from './Customer';

const query = new GraphQLObjectType({
  description: 'global query object',
  name: 'Query',
  fields: {
    /*
    Of course, i'm largely experimenting here...probably the CustomerByEmailQuery would either be eliminated or would only be allowed for certain users.  Also, it is a fine question if orders should be under customer; that would make sense from a semantics point of view, because you are asking for the orders of a customer.  And there could also be a separate orders which takes parameters to get orders across all users based on various criteria for administrative and statistics types of operations.
    */
    orders: OrdersQuery,
    connectedCustomer: ConnectedCustomerQuery,
    customerByEmail: CustomerByEmailQuery,
    productBySKU: ProductBySKUQuery,
  },
});

const mutation = new GraphQLObjectType({
  description: 'global mutation object',
  name: 'Mutation',
  fields: {
    connect: CustomerConnectMutation,
    customerUpdate: CustomerUpdateMutation,
  },
});


export const schema = new GraphQLSchema({
  query: query,
  mutation: mutation,
});
