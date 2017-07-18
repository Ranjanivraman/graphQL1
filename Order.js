
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
    address_type: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for address_type
      resolve: () => null,
    },
    city: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for city
      resolve: () => null,
    },
    company: {
      description: 'enter your description',
      type: GraphQLString,
      // TODO: Implement resolver for company
      resolve: () => null,
    },
    country_id: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for country_id
      resolve: () => null,
    },
    email: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for email
      resolve: () => null,
    },
    firstname: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for firstname
      resolve: () => null,
    },
    lastname: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for lastname
      resolve: () => null,
    },
    middlename: {
      description: 'enter your description',
      type: GraphQLString,
      // TODO: Implement resolver for middlename
      resolve: () => null,
    },
    postcode: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for postcode
      resolve: () => null,
    },
    prefix: {
      description: 'enter your description',
      type: GraphQLString,
      // TODO: Implement resolver for prefix
      resolve: () => null,
    },
    region: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for region
      resolve: () => null,
    },
    street: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for street
      resolve: () => null,
    },
    suffix: {
      description: 'enter your description',
      type: GraphQLString,
      // TODO: Implement resolver for suffix
      resolve: () => null,
    },
    telephone: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for telephone
      resolve: () => null,
    }
  },
});


const InvoicesType = new GraphQLObjectType({
  name: 'invoices',
  fields: {
    entity_id: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for entity_id
      resolve: () => null,
    },
    increment_id: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for increment_id
      resolve: () => null,
    },
    order_id: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for order_id
      resolve: () => null,
    }
  },
});


const OrderCommentsType = new GraphQLObjectType({
  name: 'order_comments',
  fields: {
    comment: {
      description: 'enter your description',
      type: GraphQLString,
      // TODO: Implement resolver for comment
      resolve: () => null,
    },
    created_at: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for created_at
      resolve: () => null,
    },
    is_customer_notified: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for is_customer_notified
      resolve: () => null,
    },
    is_visible_on_front: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for is_visible_on_front
      resolve: () => null,
    },
    status: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for status
      resolve: () => null,
    }
  },
});


const OrderItemsType = new GraphQLObjectType({
  name: 'order_items',
  fields: {
    base_discount_amount: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for base_discount_amount
      resolve: () => null,
    },
    base_original_price: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for base_original_price
      resolve: () => null,
    },
    base_price: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for base_price
      resolve: () => null,
    },
    base_price_incl_tax: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for base_price_incl_tax
      resolve: () => null,
    },
    base_row_total: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for base_row_total
      resolve: () => null,
    },
    base_row_total_incl_tax: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for base_row_total_incl_tax
      resolve: () => null,
    },
    base_tax_amount: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for base_tax_amount
      resolve: () => null,
    },
    discount_amount: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for discount_amount
      resolve: () => null,
    },
    item_id: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for item_id
      resolve: () => null,
    },
    name: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for name
      resolve: () => null,
    },
    original_price: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for original_price
      resolve: () => null,
    },
    parent_item_id: {
      description: 'enter your description',
      type: GraphQLString,
      // TODO: Implement resolver for parent_item_id
      resolve: () => null,
    },
    price: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for price
      resolve: () => null,
    },
    price_incl_tax: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for price_incl_tax
      resolve: () => null,
    },
    qty_canceled: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for qty_canceled
      resolve: () => null,
    },
    qty_invoiced: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for qty_invoiced
      resolve: () => null,
    },
    qty_ordered: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for qty_ordered
      resolve: () => null,
    },
    qty_refunded: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for qty_refunded
      resolve: () => null,
    },
    qty_shipped: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for qty_shipped
      resolve: () => null,
    },
    row_total: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for row_total
      resolve: () => null,
    },
    row_total_incl_tax: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for row_total_incl_tax
      resolve: () => null,
    },
    sku: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for sku
      resolve: () => null,
    },
    tax_amount: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for tax_amount
      resolve: () => null,
    },
    tax_percent: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for tax_percent
      resolve: () => null,
    }
  },
});


export const Order = new GraphQLObjectType({
  name: 'Order',
  fields: () => ({
    address_type: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for address_type
      resolve: () => null,
    },
    city: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for city
      resolve: () => null,
    },
    company: {
      description: 'enter your description',
      type: GraphQLString,
      // TODO: Implement resolver for company
      resolve: () => null,
    },
    country_id: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for country_id
      resolve: () => null,
    },
    email: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for email
      resolve: () => null,
    },
    firstname: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for firstname
      resolve: () => null,
    },
    lastname: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for lastname
      resolve: () => null,
    },
    middlename: {
      description: 'enter your description',
      type: GraphQLString,
      // TODO: Implement resolver for middlename
      resolve: () => null,
    },
    postcode: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for postcode
      resolve: () => null,
    },
    prefix: {
      description: 'enter your description',
      type: GraphQLString,
      // TODO: Implement resolver for prefix
      resolve: () => null,
    },
    region: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for region
      resolve: () => null,
    },
    street: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for street
      resolve: () => null,
    },
    suffix: {
      description: 'enter your description',
      type: GraphQLString,
      // TODO: Implement resolver for suffix
      resolve: () => null,
    },
    telephone: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for telephone
      resolve: () => null,
    },
    addresses: {
        description: 'enter your description',
        type: new GraphQLNonNull(new GraphQLList(AddressesType)),
        // TODO: Implement resolver for addresses
        resolve: () => null,
    },
    base_currency_code: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for base_currency_code
      resolve: () => null,
    },
    base_customer_balance_amount: {
      description: 'enter your description',
      type: GraphQLString,
      // TODO: Implement resolver for base_customer_balance_amount
      resolve: () => null,
    },
    base_discount_amount: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for base_discount_amount
      resolve: () => null,
    },
    base_gift_cards_amount: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for base_gift_cards_amount
      resolve: () => null,
    },
    base_grand_total: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for base_grand_total
      resolve: () => null,
    },
    base_reward_currency_amount: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for base_reward_currency_amount
      resolve: () => null,
    },
    base_shipping_amount: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for base_shipping_amount
      resolve: () => null,
    },
    base_shipping_discount_amount: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for base_shipping_discount_amount
      resolve: () => null,
    },
    base_shipping_tax_amount: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for base_shipping_tax_amount
      resolve: () => null,
    },
    base_subtotal: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for base_subtotal
      resolve: () => null,
    },
    base_subtotal_incl_tax: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for base_subtotal_incl_tax
      resolve: () => null,
    },
    base_tax_amount: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for base_tax_amount
      resolve: () => null,
    },
    base_total_due: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for base_total_due
      resolve: () => null,
    },
    base_total_paid: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for base_total_paid
      resolve: () => null,
    },
    base_total_refunded: {
      description: 'enter your description',
      type: GraphQLString,
      // TODO: Implement resolver for base_total_refunded
      resolve: () => null,
    },
    coupon_code: {
      description: 'enter your description',
      type: GraphQLString,
      // TODO: Implement resolver for coupon_code
      resolve: () => null,
    },
    created_at: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for created_at
      resolve: () => null,
    },
    customer_balance_amount: {
      description: 'enter your description',
      type: GraphQLString,
      // TODO: Implement resolver for customer_balance_amount
      resolve: () => null,
    },
    customer_dob: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for customer_dob
      resolve: () => null,
    },
    customer_id: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for customer_id
      resolve: () => null,
    },
    discount_amount: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for discount_amount
      resolve: () => null,
    },
    discount_description: {
      description: 'enter your description',
      type: GraphQLString,
      // TODO: Implement resolver for discount_description
      resolve: () => null,
    },
    document_type: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for document_type
      resolve: () => null,
    },
    entity_id: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for entity_id
      resolve: () => null,
    },
    gift_cards_amount: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for gift_cards_amount
      resolve: () => null,
    },
    gift_message_body: {
      description: 'enter your description',
      type: GraphQLString,
      // TODO: Implement resolver for gift_message_body
      resolve: () => null,
    },
    gift_message_from: {
      description: 'enter your description',
      type: GraphQLString,
      // TODO: Implement resolver for gift_message_from
      resolve: () => null,
    },
    gift_message_to: {
      description: 'enter your description',
      type: GraphQLString,
      // TODO: Implement resolver for gift_message_to
      resolve: () => null,
    },
    grand_total: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for grand_total
      resolve: () => null,
    },
    increment_id: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for increment_id
      resolve: () => null,
    },
    entity_id: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for entity_id
      resolve: () => null,
    },
    increment_id: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for increment_id
      resolve: () => null,
    },
    order_id: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for order_id
      resolve: () => null,
    },
    invoices: {
        description: 'enter your description',
        type: new GraphQLNonNull(new GraphQLList(InvoicesType)),
        // TODO: Implement resolver for invoices
        resolve: () => null,
    },
    locale: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for locale
      resolve: () => null,
    },
    metapack_booking_code: {
      description: 'enter your description',
      type: GraphQLString,
      // TODO: Implement resolver for metapack_booking_code
      resolve: () => null,
    },
    metapack_carrier_service_code: {
      description: 'enter your description',
      type: GraphQLString,
      // TODO: Implement resolver for metapack_carrier_service_code
      resolve: () => null,
    },
    comment: {
      description: 'enter your description',
      type: GraphQLString,
      // TODO: Implement resolver for comment
      resolve: () => null,
    },
    created_at: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for created_at
      resolve: () => null,
    },
    is_customer_notified: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for is_customer_notified
      resolve: () => null,
    },
    is_visible_on_front: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for is_visible_on_front
      resolve: () => null,
    },
    status: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for status
      resolve: () => null,
    },
    order_comments: {
        description: 'enter your description',
        type: new GraphQLNonNull(new GraphQLList(OrderCommentsType)),
        // TODO: Implement resolver for order_comments
        resolve: () => null,
    },
    order_currency_code: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for order_currency_code
      resolve: () => null,
    },
    base_discount_amount: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for base_discount_amount
      resolve: () => null,
    },
    base_original_price: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for base_original_price
      resolve: () => null,
    },
    base_price: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for base_price
      resolve: () => null,
    },
    base_price_incl_tax: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for base_price_incl_tax
      resolve: () => null,
    },
    base_row_total: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for base_row_total
      resolve: () => null,
    },
    base_row_total_incl_tax: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for base_row_total_incl_tax
      resolve: () => null,
    },
    base_tax_amount: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for base_tax_amount
      resolve: () => null,
    },
    discount_amount: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for discount_amount
      resolve: () => null,
    },
    item_id: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for item_id
      resolve: () => null,
    },
    name: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for name
      resolve: () => null,
    },
    original_price: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for original_price
      resolve: () => null,
    },
    parent_item_id: {
      description: 'enter your description',
      type: GraphQLString,
      // TODO: Implement resolver for parent_item_id
      resolve: () => null,
    },
    price: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for price
      resolve: () => null,
    },
    price_incl_tax: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for price_incl_tax
      resolve: () => null,
    },
    qty_canceled: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for qty_canceled
      resolve: () => null,
    },
    qty_invoiced: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for qty_invoiced
      resolve: () => null,
    },
    qty_ordered: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for qty_ordered
      resolve: () => null,
    },
    qty_refunded: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for qty_refunded
      resolve: () => null,
    },
    qty_shipped: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for qty_shipped
      resolve: () => null,
    },
    row_total: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for row_total
      resolve: () => null,
    },
    row_total_incl_tax: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for row_total_incl_tax
      resolve: () => null,
    },
    sku: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for sku
      resolve: () => null,
    },
    tax_amount: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for tax_amount
      resolve: () => null,
    },
    tax_percent: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for tax_percent
      resolve: () => null,
    },
    order_items: {
        description: 'enter your description',
        type: new GraphQLNonNull(new GraphQLList(OrderItemsType)),
        // TODO: Implement resolver for order_items
        resolve: () => null,
    },
    payment_method: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for payment_method
      resolve: () => null,
    },
    remote_ip: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for remote_ip
      resolve: () => null,
    },
    reward_currency_amount: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for reward_currency_amount
      resolve: () => null,
    },
    reward_points_balance: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for reward_points_balance
      resolve: () => null,
    },
    shipping_amount: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for shipping_amount
      resolve: () => null,
    },
    shipping_description: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for shipping_description
      resolve: () => null,
    },
    shipping_discount_amount: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for shipping_discount_amount
      resolve: () => null,
    },
    shipping_incl_tax: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for shipping_incl_tax
      resolve: () => null,
    },
    shipping_instructions: {
      description: 'enter your description',
      type: GraphQLString,
      // TODO: Implement resolver for shipping_instructions
      resolve: () => null,
    },
    shipping_method: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for shipping_method
      resolve: () => null,
    },
    shipping_option: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for shipping_option
      resolve: () => null,
    },
    shipping_tax_amount: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for shipping_tax_amount
      resolve: () => null,
    },
    status: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for status
      resolve: () => null,
    },
    store_currency_code: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for store_currency_code
      resolve: () => null,
    },
    store_name: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for store_name
      resolve: () => null,
    },
    store_to_order_rate: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for store_to_order_rate
      resolve: () => null,
    },
    subtotal: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for subtotal
      resolve: () => null,
    },
    subtotal_incl_tax: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for subtotal_incl_tax
      resolve: () => null,
    },
    tax_amount: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for tax_amount
      resolve: () => null,
    },
    tax_name: {
      description: 'enter your description',
      type: GraphQLString,
      // TODO: Implement resolver for tax_name
      resolve: () => null,
    },
    tax_rate: {
      description: 'enter your description',
      type: GraphQLString,
      // TODO: Implement resolver for tax_rate
      resolve: () => null,
    },
    total_due: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for total_due
      resolve: () => null,
    },
    total_paid: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
      // TODO: Implement resolver for total_paid
      resolve: () => null,
    },
    total_refunded: {
      description: 'enter your description',
      type: GraphQLString,
      // TODO: Implement resolver for total_refunded
      resolve: () => null,
    }
  })
})
