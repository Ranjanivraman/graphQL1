import {
  GraphQLBoolean,
  GraphQLString,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLList,
  GraphQLObjectType,
  GraphQLNonNull
} from 'graphql';
import { CustomerAddressFetcher } from './CustomerAddressFetcher';

export const CustomerAddressInput = new GraphQLInputObjectType({
  name: 'CustomerAddressInput',
  fields: {
    firstname: {
      type: GraphQLString,
    },
    lastname: {
      type: GraphQLString,
    },
    street: {
      type: new GraphQLList(GraphQLString),
    },
    city: {
      type: GraphQLString,
    },
    region: {
      type: GraphQLString,
    },
    postcode: {
      type: GraphQLString,
    },
  },
});


/*
NB: see the note in Order.js about OrderAddressType and its relationship to this address.
*/
export const CustomerAddressType = new GraphQLObjectType({
  name: 'CustomerAddress',
  fields: {
    care_of: {
      description: 'enter your description',
      type: GraphQLString,
    },
    city: {
      description: 'enter your description',
      type: GraphQLString,
    },
    company: {
      description: 'enter your description',
      type: GraphQLString,
    },
    country_id: {
      description: 'enter your description',
      type: GraphQLString,
    },
    entity_id: {
      description: 'enter your description',
      type: GraphQLString,
    },
    fax: {
      description: 'enter your description',
      type: GraphQLString,
    },
    firstname: {
      description: 'enter your description',
      type: GraphQLString,
    },
    is_default_billing: {
      description: 'enter your description',
      type: GraphQLBoolean,
    },
    is_default_shipping: {
      description: 'enter your description',
      type: GraphQLBoolean,
    },
    lastname: {
      description: 'enter your description',
      type: GraphQLString,
    },
    middlename: {
      description: 'enter your description',
      type: GraphQLString,
    },
    postcode: {
      description: 'enter your description',
      type: GraphQLString,
    },
    prefix: {
      description: 'enter your description',
      type: GraphQLString,
    },
    region: {
      description: 'enter your description',
      type: GraphQLString,
    },
    street: {
      description: 'enter your description',
      type: new GraphQLList(GraphQLString),
    },
    suffix: {
      description: 'enter your description',
      type: GraphQLString,
    },
    telephone: {
      description: 'enter your description',
      type: GraphQLString,
    },
    vat_id: {
      description: 'enter your description',
      type: GraphQLString,
    },
  },

});

export const CustomerAddressesByCustomerIdQuery = {
  type: CustomerAddressType,
  resolve: (obj, args, ctx) => {
    return CustomerAddressFetcher.getCustomerAddressesByCustomerId(ctx.customerId);
  },
};

export const CustomerAddressUpdateMutation = {
  type: CustomerAddressType,
  args: {
    customerAddressInput: {
      type: new GraphQLNonNull(CustomerAddressInput),
    }
  },
  resolve: (obj, {customerAddressEntityId, customerAddressInput}, ctx) => {

    const cleaned = {}

    return CustomerAddressFetcher.updateCustomerAddressByAddressId(customerAddressEntityId, cleaned)
    .then(res => CustomerAddressFetcher.getCustomerAddressByAddressId(ctx.customerId))
  },
};
