
const {
  GraphQLBoolean,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLID,
  GraphQLNonNull
} = require('graphql')



export const Customer = new GraphQLObjectType({
  name: 'Customer',
  fields: () => ({
    created_at: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for created_at
      resolve: () => null,
    },
    created_in: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for created_in
      resolve: () => null,
    },
    disable_auto_group_change: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for disable_auto_group_change
      resolve: () => null,
    },
    dob: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for dob
      resolve: () => null,
    },
    email: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for email
      resolve: () => null,
    },
    entity_id: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for entity_id
      resolve: () => null,
    },
    firstname: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for firstname
      resolve: () => null,
    },
    group_id: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for group_id
      resolve: () => null,
    },
    lastname: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for lastname
      resolve: () => null,
    },
    website_id: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for website_id
      resolve: () => null,
    }
  })
})
})
