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
  parseLiteral: value => validateDateString(value),

  // What is parsed when the value is passed as a variable
  parseValue: value => validateDateString(value)

});

// TODO: these might need some utc() sprinkling around; not sure if/when they are used!!
function isMoment (iso) { return moment(iso).isValid(); };

function validateDateString(iso) {
  if (isMoment(iso) ) { return iso }
  else {
    throw new GraphQLError(`${iso} is not a valid date`);
  }
}
