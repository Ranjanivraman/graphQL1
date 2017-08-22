
import {
  GraphQLBoolean,
  GraphQLEnumType,
  GraphQLFloat,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLString,
  GraphQLList,
  GraphQLObjectType,
} from 'graphql';

import { DeliveryFetcher } from './DeliveryFetcher';
import { ISO8601Date } from './ISO8601Date';
var winston = require('winston');
const moment = require('moment');


const AcceptableStatusType = new GraphQLObjectType({
  name: 'acceptable_status',
  fields: {
    acceptable: {
      description: 'enter your description',
      type: GraphQLBoolean,
    },
    friendly_status: {
      description: 'enter your description',
      type: GraphQLString,
    },
    status: {
      description: 'enter your description',
      type: GraphQLString,
    },
    timestamp: {
      description: 'enter your description',
      type: ISO8601Date,
      resolve: (obj) => {
        return obj.timestamp * 1000
      },
    }
  },
});


const AcceptableStatusLogsType = new GraphQLObjectType({
  name: 'acceptable_status_logs',
  fields: {
    acceptable: {
      description: 'enter your description',
      type: GraphQLBoolean,
    },
    friendly_status: {
      description: 'enter your description',
      type: GraphQLString,
    },
    status: {
      description: 'enter your description',
      type: GraphQLString,
    },
    timestamp: {
      description: 'enter your description',
      type: ISO8601Date,
      resolve: (obj) => {
        return obj.timestamp * 1000
      },
    }
  },
});


const ExpectedDeliveryDatesType = new GraphQLObjectType({
  name: 'expected_delivery_dates',
  fields: {
    from: {
      description: 'enter your description',
      type: ISO8601Date,
      resolve: (obj) => {
        return obj.from * 1000
      },
    },
    to: {
      description: 'enter your description',
      type: ISO8601Date,
      resolve: (obj) => {
        return obj.to * 1000
      },
    }
  },
});


const OrderShippingAddressType = new GraphQLObjectType({
  name: 'order_shipping_address',
  fields: {
    city: {
      description: 'enter your description',
      type: GraphQLString,
    },
    email: {
      description: 'enter your description',
      type: GraphQLString,
    },
    name: {
      description: 'enter your description',
      type: GraphQLString,
    },
    postcode: {
      description: 'enter your description',
      type: GraphQLString,
    },
    region: {
      description: 'enter your description',
      type: GraphQLString,
    },
    street_one: {
      description: 'enter your description',
      type: GraphQLString,
    }
  },
});


const StatusType = new GraphQLObjectType({
  name: 'status',
  fields: {
    acceptable: {
      description: 'enter your description',
      type: GraphQLBoolean,
    },
    friendly_status: {
      description: 'enter your description',
      type: GraphQLString,
    },
    status: {
      description: 'enter your description',
      type: GraphQLString,
    },
    timestamp: {
      description: 'enter your description',
      type: ISO8601Date,
      resolve: (obj) => {
        return obj.timestamp * 1000
      },
    }
  },
});


const StatusLogsType = new GraphQLObjectType({
  name: 'status_logs',
  fields: {
    acceptable: {
      description: 'enter your description',
      type: GraphQLBoolean,
    },
    friendly_status: {
      description: 'enter your description',
      type: GraphQLString,
    },
    status: {
      description: 'enter your description',
      type: GraphQLString,
    },
    timestamp: {
      description: 'enter your description',
      type: ISO8601Date,
      resolve: (obj) => {
        return obj.timestamp * 1000
      },
    }
  },
});


export const DeliveryType = new GraphQLObjectType({
  name: 'Delivery',
  fields: () => ({
    acceptable_status: {
      description: 'enter your description',
      type: AcceptableStatusType,
    },
    acceptable_status_logs: {
      description: 'enter your description',
      type: new GraphQLList(AcceptableStatusLogsType),
    },
    delivered_date: {
      description: 'enter your description',
      type: ISO8601Date,
      resolve: (obj) => {
        return obj.delivered_date * 1000
      },
    },
    expected_delivery_dates: {
      description: 'enter your description',
      type: ExpectedDeliveryDatesType,
    },
    is_delivered: {
      description: 'enter your description',
      type: GraphQLBoolean,
    },
    order_date: {
      description: 'enter your description',
      // oddly, this date doesn't need multiplying by 1000! consistency, bah!
      type: ISO8601Date,
    },
    order_date_pretty: {
      description: 'enter your description',
      type: GraphQLString,
    },
    order_id: {
      description: 'enter your description',
      type: GraphQLString,
    },
    order_shipping_address: {
      description: 'enter your description',
      type: OrderShippingAddressType,
    },
    status: {
      description: 'enter your description',
      type: StatusType,
    },
    status_logs: {
      description: 'enter your description',
      type: new GraphQLList(StatusLogsType),
    },
    success: {
      description: 'enter your description',
      type: GraphQLBoolean,
    },
    tracking_carrier: {
      description: 'enter your description',
      type: GraphQLString,
    },
    tracking_code: {
      description: 'enter your description',
      type: GraphQLString,
    },
    tracking_link: {
      description: 'enter your description',
      type: GraphQLString,
    }
  })
});
