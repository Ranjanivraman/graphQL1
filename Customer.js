
import {
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
  GraphQLObjectType,
} from 'graphql';
import { CustomerFetcher } from './CustomerFetcher';
import { CustomerAddressFetcher } from './CustomerAddressFetcher';
import { CustomerAddressType } from './CustomerAddress';
import { ISO8601Date } from './ISO8601Date';

export const Customer = new GraphQLObjectType({
  name: 'Customer',
  fields: {
    addresses: {
      description: 'array of addresses',
      type: new GraphQLList(CustomerAddressType),
      resolve: (obj, args, ctx) => {
        return CustomerAddressFetcher.getCustomerAddressesById(obj.entity_id);
      },
    },
    created_at: {
      description: 'enter your description',
      type: ISO8601Date,
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
      type: ISO8601Date,
    },
    email: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    entity_id: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
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

export const ConnectedCustomerQuery = {
  type: Customer,
  resolve: (obj, args, ctx) => {
    return CustomerFetcher.getCustomerById(ctx.customerId);
  },
};

export const CustomerByEmailQuery = {
  type: Customer,
  args: {
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: (obj, {email}) => {
    return CustomerFetcher.getCustomerByEmail(email);
  },
};

export const CustomerConnectMutation = {
  type: Customer,
  args: {
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: (obj, {email, password}) => {
    if (password != "shhhh") {
      throw("invalid login")
    }
    // naturally, the error handling here needs beefing up.  for example, if the username is not recognised by the server, it doesn't send back an error, it just sends back: [] as the response.  So, somewhere in here, it should
    return CustomerFetcher.getCustomerByEmail(email);
  },
};
