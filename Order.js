
import {
  GraphQLString,
  GraphQLList,
  GraphQLObjectType,
} from 'graphql';

import { OrderFetcher } from './OrderFetcher';
import { Product } from './Product';
import { ProductFetcher } from './ProductFetcher';
import { ISO8601Date } from './MomentDate';


const AddressesType = new GraphQLObjectType({
  name: 'addresses',
  fields: {
    address_type: {
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
    email: {
      description: 'enter your description',
      type: GraphQLString,
    },
    firstname: {
      description: 'enter your description',
      type: GraphQLString,
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
      type: GraphQLString,
    },
    suffix: {
      description: 'enter your description',
      type: GraphQLString,
    },
    telephone: {
      description: 'enter your description',
      type: GraphQLString,
    },
  },
});


const InvoicesType = new GraphQLObjectType({
  name: 'invoices',
  fields: {
    entity_id: {
      description: 'enter your description',
      type: GraphQLString,
    },
    increment_id: {
      description: 'enter your description',
      type: GraphQLString,
    },
    order_id: {
      description: 'enter your description',
      type: GraphQLString,
    },
  },
});


const OrderCommentsType = new GraphQLObjectType({
  name: 'order_comments',
  fields: {
    comment: {
      description: 'enter your description',
      type: GraphQLString,
    },
    created_at: {
      description: 'enter your description',
      type: GraphQLString,
    },
    is_customer_notified: {
      description: 'enter your description',
      type: GraphQLString,
    },
    is_visible_on_front: {
      description: 'enter your description',
      type: GraphQLString,
    },
    status: {
      description: 'enter your description',
      type: GraphQLString,
    },
  },
});


const OrderItemsType = new GraphQLObjectType({
  name: 'order_items',
  fields: {
    base_discount_amount: {
      description: 'enter your description',
      type: GraphQLString,
    },
    base_original_price: {
      description: 'enter your description',
      type: GraphQLString,
    },
    base_price: {
      description: 'enter your description',
      type: GraphQLString,
    },
    base_price_incl_tax: {
      description: 'enter your description',
      type: GraphQLString,
    },
    base_row_total: {
      description: 'enter your description',
      type: GraphQLString,
    },
    base_row_total_incl_tax: {
      description: 'enter your description',
      type: GraphQLString,
    },
    base_tax_amount: {
      description: 'enter your description',
      type: GraphQLString,
    },
    discount_amount: {
      description: 'enter your description',
      type: GraphQLString,
    },
    item_id: {
      description: 'enter your description',
      type: GraphQLString,
    },
    name: {
      description: 'enter your description',
      type: GraphQLString,
    },
    original_price: {
      description: 'enter your description',
      type: GraphQLString,
    },
    parent_item_id: {
      description: 'enter your description',
      type: GraphQLString,
    },
    price: {
      description: 'enter your description',
      type: GraphQLString,
    },
    price_incl_tax: {
      description: 'enter your description',
      type: GraphQLString,
    },
    product: {
      type: Product,
      resolve: (obj, args, ctx) => {
        const sku = obj.sku
        return ProductFetcher.getProductBySKU(sku)
      },
    },
    qty_canceled: {
      description: 'enter your description',
      type: GraphQLString,
    },
    qty_invoiced: {
      description: 'enter your description',
      type: GraphQLString,
    },
    qty_ordered: {
      description: 'enter your description',
      type: GraphQLString,
    },
    qty_refunded: {
      description: 'enter your description',
      type: GraphQLString,
    },
    qty_shipped: {
      description: 'enter your description',
      type: GraphQLString,
    },
    row_total: {
      description: 'enter your description',
      type: GraphQLString,
    },
    row_total_incl_tax: {
      description: 'enter your description',
      type: GraphQLString,
    },
    sku: {
      description: 'enter your description',
      type: GraphQLString,
    },
    tax_amount: {
      description: 'enter your description',
      type: GraphQLString,
    },
    tax_percent: {
      description: 'enter your description',
      type: GraphQLString,
    },
  },
});


export const Order = new GraphQLObjectType({
  name: 'Order',
  fields: {
    addresses: {
      description: 'enter your description',
      type: new GraphQLList(AddressesType),
    },
    base_currency_code: {
      description: 'enter your description',
      type: GraphQLString,
    },
    base_customer_balance_amount: {
      description: 'enter your description',
      type: GraphQLString,
    },
    base_discount_amount: {
      description: 'enter your description',
      type: GraphQLString,
    },
    base_gift_cards_amount: {
      description: 'enter your description',
      type: GraphQLString,
    },
    base_grand_total: {
      description: 'enter your description',
      type: GraphQLString,
    },
    base_reward_currency_amount: {
      description: 'enter your description',
      type: GraphQLString,
    },
    base_shipping_amount: {
      description: 'enter your description',
      type: GraphQLString,
    },
    base_shipping_discount_amount: {
      description: 'enter your description',
      type: GraphQLString,
    },
    base_shipping_tax_amount: {
      description: 'enter your description',
      type: GraphQLString,
    },
    base_subtotal: {
      description: 'enter your description',
      type: GraphQLString,
    },
    base_subtotal_incl_tax: {
      description: 'enter your description',
      type: GraphQLString,
    },
    base_tax_amount: {
      description: 'enter your description',
      type: GraphQLString,
    },
    base_total_due: {
      description: 'enter your description',
      type: GraphQLString,
    },
    base_total_paid: {
      description: 'enter your description',
      type: GraphQLString,
    },
    base_total_refunded: {
      description: 'enter your description',
      type: GraphQLString,
    },
    coupon_code: {
      description: 'enter your description',
      type: GraphQLString,
    },
    created_at: {
      description: 'enter your description',
      type: ISO8601Date,
    },
    customer_balance_amount: {
      description: 'enter your description',
      type: GraphQLString,
    },
    customer_dob: {
      description: 'enter your description',
      type: GraphQLString,
    },
    customer_id: {
      description: 'enter your description',
      type: GraphQLString,
    },
    discount_amount: {
      description: 'enter your description',
      type: GraphQLString,
    },
    discount_description: {
      description: 'enter your description',
      type: GraphQLString,
    },
    document_type: {
      description: 'enter your description',
      type: GraphQLString,
    },
    entity_id: {
      description: 'enter your description',
      type: GraphQLString,
    },
    gift_cards_amount: {
      description: 'enter your description',
      type: GraphQLString,
    },
    gift_message_body: {
      description: 'enter your description',
      type: GraphQLString,
    },
    gift_message_from: {
      description: 'enter your description',
      type: GraphQLString,
    },
    gift_message_to: {
      description: 'enter your description',
      type: GraphQLString,
    },
    grand_total: {
      description: 'enter your description',
      type: GraphQLString,
    },
    increment_id: {
      description: 'enter your description',
      type: GraphQLString,
    },
    invoices: {
      description: 'enter your description',
      type: new GraphQLList(InvoicesType),
    },
    locale: {
      description: 'enter your description',
      type: GraphQLString,
    },
    metapack_booking_code: {
      description: 'enter your description',
      type: GraphQLString,
    },
    metapack_carrier_service_code: {
      description: 'enter your description',
      type: GraphQLString,
    },
    order_comments: {
      description: 'enter your description',
      type: new GraphQLList(OrderCommentsType),
    },
    order_currency_code: {
      description: 'enter your description',
      type: GraphQLString,
    },
    order_items: {
      description: 'enter your description',
      type: new GraphQLList(OrderItemsType),
    },
    payment_method: {
      description: 'enter your description',
      type: GraphQLString,
    },
    remote_ip: {
      description: 'enter your description',
      type: GraphQLString,
    },
    reward_currency_amount: {
      description: 'enter your description',
      type: GraphQLString,
    },
    reward_points_balance: {
      description: 'enter your description',
      type: GraphQLString,
    },
    shipping_amount: {
      description: 'enter your description',
      type: GraphQLString,
    },
    shipping_description: {
      description: 'enter your description',
      type: GraphQLString,
    },
    shipping_discount_amount: {
      description: 'enter your description',
      type: GraphQLString,
    },
    shipping_incl_tax: {
      description: 'enter your description',
      type: GraphQLString,
    },
    shipping_instructions: {
      description: 'enter your description',
      type: GraphQLString,
    },
    shipping_method: {
      description: 'enter your description',
      type: GraphQLString,
    },
    shipping_option: {
      description: 'enter your description',
      type: GraphQLString,
    },
    shipping_tax_amount: {
      description: 'enter your description',
      type: GraphQLString,
    },
    status: {
      description: 'enter your description',
      type: GraphQLString,
    },
    store_currency_code: {
      description: 'enter your description',
      type: GraphQLString,
    },
    store_name: {
      description: 'enter your description',
      type: GraphQLString,
    },
    store_to_order_rate: {
      description: 'enter your description',
      type: GraphQLString,
    },
    subtotal: {
      description: 'enter your description',
      type: GraphQLString,
    },
    subtotal_incl_tax: {
      description: 'enter your description',
      type: GraphQLString,
    },
    tax_amount: {
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
    total_due: {
      description: 'enter your description',
      type: GraphQLString,
    },
    total_paid: {
      description: 'enter your description',
      type: GraphQLString,
    },
    total_refunded: {
      description: 'enter your description',
      type: GraphQLString,
    },
  },
});

export const OrdersQuery = {
  type: new GraphQLList(Order),
  resolve: (obj, args, ctx) => {
    return OrderFetcher.getOrders(ctx.customerId);
  },
};
