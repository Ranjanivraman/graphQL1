import {
  GraphQLList,
  GraphQLSchema,
  GraphQLObjectType,
} from 'graphql';

import { Order } from './Order';
import { OrderFetcher } from './OrderFetcher';
import { Customer } from './Customer';
import { CustomerFetcher } from './CustomerFetcher';


const query = new GraphQLObjectType({
  description: 'global query object',
  name: 'Query',
  fields: {

    orders: {
      type: new GraphQLList(Order),
      resolve: () => {
        return OrderFetcher.getOrders();
      },
    },

    customers: {
      type: new GraphQLList(Customer),
      resolve: () => {
        return CustomerFetcher.getCustomers();
      },
    },

    customerById: {
      type: Customer,
      resolve: () => {
        return CustomerFetcher.getCustomerById();
      },
    },

    customerByEmail: {
      type: Customer,
      resolve: () => {
        return CustomerFetcher.getCustomerByEmail();
      },
    },

  },
});

export const schema = new GraphQLSchema({
  query: query,
});
