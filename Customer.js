
import {
  GraphQLList,
  GraphQLString,
  GraphQLObjectType,
} from 'graphql';

import { CustomerFetcher } from './CustomerFetcher';

export const Customer = new GraphQLObjectType({
  name: 'Customer',
  fields: {
    created_at: {
      description: 'enter your description',
      type: GraphQLString,
    },
    created_in: {
      description: 'enter your description',
      type: GraphQLString,
    },
    disable_auto_group_change: {
      description: 'enter your description',
      type: GraphQLString,
    },
    dob: {
      description: 'enter your description',
      type: GraphQLString,
    },
    email: {
      description: 'enter your description',
      type: GraphQLString,
    },
    entity_id: {
      description: 'enter your description',
      type: GraphQLString,
    },
    firstname: {
      description: 'enter your description',
      type: GraphQLString,
    },
    group_id: {
      description: 'enter your description',
      type: GraphQLString,
    },
    lastname: {
      description: 'enter your description',
      type: GraphQLString,
    },
    website_id: {
      description: 'enter your description',
      type: GraphQLString,
    },
  },

});

export const CustomersQuery = {
  type: new GraphQLList(Customer),
  resolve: () => {
    return CustomerFetcher.getCustomers();
  },
};

export const CustomerByIdQuery = {
  type: Customer,
  resolve: () => {
    return CustomerFetcher.getCustomerById();
  },
};

export const CustomerByEmailQuery = {
  type: Customer,
  resolve: () => {
    return CustomerFetcher.getCustomerByEmail();
  },
};
