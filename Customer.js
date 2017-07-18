
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
      type: GraphQLString
    },
    created_in: {
      description: 'enter your description',
      type: GraphQLString
    },
    disable_auto_group_change: {
      description: 'enter your description',
      type: GraphQLString
    },
    dob: {
      description: 'enter your description',
      type: GraphQLString
    },
    email: {
      description: 'enter your description',
      type: GraphQLString
    },
    entity_id: {
      description: 'enter your description',
      type: GraphQLString
    },
    firstname: {
      description: 'enter your description',
      type: GraphQLString
    },
    group_id: {
      description: 'enter your description',
      type: GraphQLString
    },
    lastname: {
      description: 'enter your description',
      type: GraphQLString
    },
    website_id: {
      description: 'enter your description',
      type: GraphQLString
    }
  })

})
