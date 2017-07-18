
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

export const CustomerByIdQuery = {
  type: Customer,
  resolve: (obj, args, ctx) => {
    return CustomerFetcher.getCustomerById(ctx.customerId);
  },
};

export const CustomerByEmailQuery = {
  type: Customer,
  args: {
    email: {
      type: GraphQLString,
    },
  },
  resolve: (obj, {email}) => {
    return CustomerFetcher.getCustomerByEmail(email);
  },
};

export const CustomerLoginMutation = {
  type: Customer,
  args: {
    email: {
      type: GraphQLString,
    },
    password: {
      type: GraphQLString,
    },
  },
  resolve: (obj, {email, password}) => {
    if (password != "shhhh") {
      throw("you must be joking")
    }
    return CustomerFetcher.getCustomerByEmail(email);
  },
};
