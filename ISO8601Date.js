const moment = require('moment');

const {
  GraphQLScalarType,
  GraphQLError
} = require('graphql');

export var ISO8601Date = new GraphQLScalarType({
  name: 'ISO8601Date',

  // What gets returned to the caller after being queried
  // attempts to parse value and converts to ISO8601 in UTC time zone
  serialize: value => moment(value).utc().format(),

  // What is parsed when the value is embedded into the query string
  parseLiteral: value => moment(value),

  // What is parsed when the value is passed as a variable
  parseValue: value => moment(value)

});
