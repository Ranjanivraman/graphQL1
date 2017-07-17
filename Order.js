

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


const AddressesType = new GraphQLObjectType({
  name: 'addresses',
  fields: {
    region: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    postcode: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    lastname: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    street: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    city: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    email: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    telephone: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    country_id: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    firstname: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    address_type: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    prefix: {
      description: 'enter your description',
      type: GraphQLString,
    },
    middlename: {
      description: 'enter your description',
      type: GraphQLString,
    },
    suffix: {
      description: 'enter your description',
      type: GraphQLString,
    },
    company: {
      description: 'enter your description',
      type: GraphQLString,
    }
  },
});


const OrderItemsType = new GraphQLObjectType({
  name: 'order_items',
  fields: {
    item_id: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    parent_item_id: {
      description: 'enter your description',
      type: GraphQLString,
    },
    sku: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    name: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    qty_canceled: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    qty_invoiced: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    qty_ordered: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    qty_refunded: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    qty_shipped: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    price: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    base_price: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    original_price: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    base_original_price: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    tax_percent: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    tax_amount: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    base_tax_amount: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    discount_amount: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    base_discount_amount: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    row_total: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    base_row_total: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    price_incl_tax: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    base_price_incl_tax: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    row_total_incl_tax: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    base_row_total_incl_tax: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    }
  },
});


const OrderCommentsType = new GraphQLObjectType({
  name: 'order_comments',
  fields: {
    is_customer_notified: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    is_visible_on_front: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    comment: {
      description: 'enter your description',
      type: GraphQLString,
    },
    status: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    created_at: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    }
  },
});


const InvoicesType = new GraphQLObjectType({
  name: 'invoices',
  fields: {
    entity_id: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    order_id: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    increment_id: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    }
  },
});


const Order = new GraphQLObjectType({
  name: 'Order',
  fields: () => ({
    entity_id: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    status: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    coupon_code: {
      description: 'enter your description',
      type: GraphQLString,
    },
    shipping_description: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    customer_id: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    base_discount_amount: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    base_grand_total: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLFloat),
    },
    base_shipping_amount: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    base_shipping_tax_amount: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    base_subtotal: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    base_tax_amount: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    base_total_paid: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    base_total_refunded: {
      description: 'enter your description',
      type: GraphQLString,
    },
    discount_amount: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    grand_total: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    shipping_amount: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    shipping_tax_amount: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    store_to_order_rate: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    subtotal: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    tax_amount: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    total_paid: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    total_refunded: {
      description: 'enter your description',
      type: GraphQLString,
    },
    base_shipping_discount_amount: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    base_subtotal_incl_tax: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    base_total_due: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    shipping_discount_amount: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    subtotal_incl_tax: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    total_due: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    customer_dob: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    increment_id: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    base_currency_code: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    discount_description: {
      description: 'enter your description',
      type: GraphQLString,
    },
    order_currency_code: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    remote_ip: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    shipping_method: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    store_currency_code: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    store_name: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    created_at: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    shipping_incl_tax: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    base_customer_balance_amount: {
      description: 'enter your description',
      type: GraphQLString,
    },
    customer_balance_amount: {
      description: 'enter your description',
      type: GraphQLString,
    },
    base_gift_cards_amount: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    gift_cards_amount: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    reward_points_balance: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    base_reward_currency_amount: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    reward_currency_amount: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    document_type: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    locale: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    metapack_booking_code: {
      description: 'enter your description',
      type: GraphQLString,
    },
    metapack_carrier_service_code: {
      description: 'enter your description',
      type: GraphQLString,
    },
    shipping_instructions: {
      description: 'enter your description',
      type: GraphQLString,
    },
    payment_method: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    gift_message_from: {
      description: 'enter your description',
      type: GraphQLString,
    },
    gift_message_to: {
      description: 'enter your description',
      type: GraphQLString,
    },
    gift_message_body: {
      description: 'enter your description',
      type: GraphQLString,
    },
    tax_name: {
      description: 'enter your description',
      type: GraphQLString,
    },
    tax_rate: {
      description: 'enter your description',
      type: GraphQLString,
    },
    region: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    postcode: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    lastname: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    street: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    city: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    email: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    telephone: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    country_id: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    firstname: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    address_type: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    prefix: {
      description: 'enter your description',
      type: GraphQLString,
    },
    middlename: {
      description: 'enter your description',
      type: GraphQLString,
    },
    suffix: {
      description: 'enter your description',
      type: GraphQLString,
    },
    company: {
      description: 'enter your description',
      type: GraphQLString,
    },
    addresses: {
      description: 'enter your description',
      type: new GraphQLNonNull(new GraphQLList(AddressesType)),
    },
    item_id: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    parent_item_id: {
      description: 'enter your description',
      type: GraphQLString,
    },
    sku: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    name: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    qty_canceled: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    qty_invoiced: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    qty_ordered: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    qty_refunded: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    qty_shipped: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    price: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    base_price: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    original_price: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    base_original_price: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    tax_percent: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    tax_amount: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    base_tax_amount: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    discount_amount: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    base_discount_amount: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    row_total: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    base_row_total: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    price_incl_tax: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    base_price_incl_tax: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    row_total_incl_tax: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    base_row_total_incl_tax: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    order_items: {
      description: 'enter your description',
      type: new GraphQLNonNull(new GraphQLList(OrderItemsType)),
    },
    is_customer_notified: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    is_visible_on_front: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    comment: {
      description: 'enter your description',
      type: GraphQLString,
    },
    status: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    created_at: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    order_comments: {
      description: 'enter your description',
      type: new GraphQLNonNull(new GraphQLList(OrderCommentsType)),
    },
    shipping_option: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    entity_id: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    order_id: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    increment_id: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    invoices: {
      description: 'enter your description',
      type: new GraphQLNonNull(new GraphQLList(InvoicesType)),
    }
  })
})


export default Order
