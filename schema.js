import {
  graphql,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} from 'graphql';

import Order from './Order'
import OrderFetcher from './OrderFetcher'

 const query = new GraphQLObjectType({
  description: 'global query object',
  name: 'Query',
  fields: () => ({

    orders: {
      type: new GraphQLList(Order),
      resolve: () => {
        return OrderFetcher.getOrders()
      }
    }

  })
})

export const schema = new GraphQLSchema({
  query: query
});
