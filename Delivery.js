
import {
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


const AcceptableStatusType = new GraphQLObjectType({
  name: 'acceptable_status',
  fields: {
    acceptable: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLBoolean),
    },
    friendly_status: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    status: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    timestamp: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLInt),
    }
  },
});


const AcceptableStatusLogsType = new GraphQLObjectType({
  name: 'acceptable_status_logs',
  fields: {
    acceptable: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLBoolean),
    },
    friendly_status: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    status: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    timestamp: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLInt),
      // TODO: Implement resolver for timestamp
      resolve: () => null,
    }
  },
});


const ExpectedDeliveryDatesType = new GraphQLObjectType({
  name: 'expected_delivery_dates',
  fields: {
    from: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLInt),
    },
    to: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLInt),
    }
  },
});


const OrderShippingAddressType = new GraphQLObjectType({
  name: 'order_shipping_address',
  fields: {
    city: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    email: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    name: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    postcode: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    region: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    street_one: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    }
  },
});


const StatusType = new GraphQLObjectType({
  name: 'status',
  fields: {
    acceptable: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLBoolean),
    },
    friendly_status: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    status: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    timestamp: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLInt),
      // TODO: Implement resolver for timestamp
      resolve: () => null,
    }
  },
});


const StatusLogsType = new GraphQLObjectType({
  name: 'status_logs',
  fields: {
    acceptable: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLBoolean),
    },
    friendly_status: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    status: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    timestamp: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLInt),
      // TODO: Implement resolver for timestamp
      resolve: () => null,
    }
  },
});


export const DeliveryType = new GraphQLObjectType({
  name: 'Delivery',
  fields: () => ({
    acceptable_status: {
      description: 'enter your description',
      type: new GraphQLNonNull(AcceptableStatusType),
    },
    acceptable_status_logs: {
      description: 'enter your description',
      type: new GraphQLNonNull(new GraphQLList(AcceptableStatusLogsType)),
    },
    delivered_date: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLInt),
      // TODO: Implement resolver for delivered_date
      resolve: () => null,
    },
    expected_delivery_dates: {
      description: 'enter your description',
      type: new GraphQLNonNull(ExpectedDeliveryDatesType),
    },
    is_delivered: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLBoolean),
    },
    order_date: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLInt),
      // TODO: Implement resolver for order_date
      resolve: () => null,
    },
    order_date_pretty: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for order_date_pretty
      resolve: () => null,
    },
    order_id: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    order_shipping_address: {
      description: 'enter your description',
      type: new GraphQLNonNull(OrderShippingAddressType),
    },
    status: {
      description: 'enter your description',
      type: new GraphQLNonNull(StatusType),
    },
    status_logs: {
      description: 'enter your description',
      type: new GraphQLNonNull(new GraphQLList(StatusLogsType)),
    },
    success: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLBoolean),
    },
    tracking_carrier: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    tracking_code: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    tracking_link: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    }
  })
});

export const DeliveryQuery = {
  type = OrderType,
  args: {
    orderId: {
      type: GraphQLNonNull(GraphQLString),
    },
    postcode: {
      type: GraphQLNonNull(GraphQLString),
    },
  },
  resolve: (obj, {orderId, postcode}, ctx) => {
    return DeliveryFetcher.getDelivery(orderId, postcode)
  },
};
