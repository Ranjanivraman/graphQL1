
import {
  GraphQLEnumType,
  GraphQLFloat,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLObjectType,
} from 'graphql';

import { OrderFetcher } from './OrderFetcher';
import { ProductType } from './Product';
import { ProductFetcher } from './ProductFetcher';
import { ISO8601Date } from './ISO8601Date';

/*
N.B. there is another address defined in CustomerAddress.  I have no idea if they are the same or if one is a subset of the other...etc.  If there is some relationship between the two, that should be reflected in the code rather than doing as I have done and making them two completely different, unrelated types.
*/
const OrderAddressType = new GraphQLObjectType({
  name: 'OrderAddress',
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


const InvoiceType = new GraphQLObjectType({
  name: 'Invoice',
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


const OrderCommentType = new GraphQLObjectType({
  name: 'OrderComment',
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


const OrderItemType = new GraphQLObjectType({
  name: 'OrderItem',
  fields: {
    base_discount_amount: {
      description: 'enter your description',
      type: GraphQLFloat,
    },
    base_original_price: {
      description: 'enter your description',
      type: GraphQLFloat,
    },
    base_price: {
      description: 'enter your description',
      type: GraphQLFloat,
    },
    base_price_incl_tax: {
      description: 'enter your description',
      type: GraphQLFloat,
    },
    base_row_total: {
      description: 'enter your description',
      type: GraphQLFloat,
    },
    base_row_total_incl_tax: {
      description: 'enter your description',
      type: GraphQLFloat,
    },
    base_tax_amount: {
      description: 'enter your description',
      type: GraphQLFloat,
    },
    discount_amount: {
      description: 'enter your description',
      type: GraphQLFloat,
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
      type: GraphQLFloat,
    },
    parent_item_id: {
      description: 'enter your description',
      type: GraphQLString,
    },
    price: {
      description: 'enter your description',
      type: GraphQLFloat,
    },
    price_incl_tax: {
      description: 'enter your description',
      type: GraphQLFloat,
    },
    product: {
      type: ProductType,
      resolve: (obj, args, ctx) => {
        const sku = obj.sku
        return ProductFetcher.getProductBySKU(sku)
      },
    },
    qty_canceled: {
      description: 'enter your description',
      type: GraphQLInt,
    },
    qty_invoiced: {
      description: 'enter your description',
      type: GraphQLInt,
    },
    qty_ordered: {
      description: 'enter your description',
      type: GraphQLInt,
    },
    qty_refunded: {
      description: 'enter your description',
      type: GraphQLInt,
    },
    qty_shipped: {
      description: 'enter your description',
      type: GraphQLInt,
    },
    row_total: {
      description: 'enter your description',
      type: GraphQLFloat,
    },
    row_total_incl_tax: {
      description: 'enter your description',
      type: GraphQLFloat,
    },
    sku: {
      description: 'enter your description',
      type: GraphQLString,
    },
    tax_amount: {
      description: 'enter your description',
      type: GraphQLFloat,
    },
    tax_percent: {
      description: 'enter your description',
      type: GraphQLString,
    },
  },
});

var OrderStatusEnum = new GraphQLEnumType({
  name: 'OrderStatus',
  description: 'Where is my order?',
  values: {
// i lifted these from the spreadsheet: https://missguided.atlassian.net/wiki/display/PROJ/SOMS+Module?preview=%2F130001937%2F131502684%2FOrder_Status_Sequence_v4.xlsx
    holded: { value: "holded", },
    pending: { value: "pending", },
    fraud: { value: "fraud", },
    klarna_reserved: { value: "klarna_reserved", },
    payment_review: { value: "payment_review", },
    pending_payment: { value: "pending_payment", },
    printed: { value: "printed", },
    ready_to_manifest: { value: "ready_to_manifest", },
    klarna_processed: { value: "klarna_processed", },
    processing: { value: "processing", },
    to_collect: { value: "to_collect", },
    collected: { value: "collected", },
    dispatched: { value: "dispatched", },
    duplicate_order: { value: "duplicate_order", },
    complete: { value: "complete", },
    part_ship: { value: "part_ship", },
    ready_to_dispatch: { value: "ready_to_dispatch", },
    out_for_delivery: { value: "out_for_delivery", },
    delivered: { value: "delivered", },
    failed_delivery: { value: "failed_delivery", },
    closed_by_system: { value: "closed_by_system", },
    canceled: { value: "canceled", },
    return_received: { value: "return_received", },
    offline_refund: { value: "offline_refund", },
    closed: { value: "closed", },
  }
});

export const OrderType = new GraphQLObjectType({
  name: 'Order',
  fields: {
    base_currency_code: {
      description: 'enter your description',
      type: GraphQLString,
    },
    base_customer_balance_amount: {
      description: 'enter your description',
      type: GraphQLFloat,
    },
    base_discount_amount: {
      description: 'enter your description',
      type: GraphQLFloat,
    },
    base_gift_cards_amount: {
      description: 'enter your description',
      type: GraphQLFloat,
    },
    base_grand_total: {
      description: 'enter your description',
      type: GraphQLFloat,
    },
    base_reward_currency_amount: {
      description: 'enter your description',
      type: GraphQLFloat,
    },
    base_shipping_amount: {
      description: 'enter your description',
      type: GraphQLFloat,
    },
    base_shipping_discount_amount: {
      description: 'enter your description',
      type: GraphQLFloat,
    },
    base_shipping_tax_amount: {
      description: 'enter your description',
      type: GraphQLFloat,
    },
    base_subtotal: {
      description: 'enter your description',
      type: GraphQLFloat,
    },
    base_subtotal_incl_tax: {
      description: 'enter your description',
      type: GraphQLFloat,
    },
    base_tax_amount: {
      description: 'enter your description',
      type: GraphQLFloat,
    },
    base_total_due: {
      description: 'enter your description',
      type: GraphQLFloat,
    },
    base_total_paid: {
      description: 'enter your description',
      type: GraphQLFloat,
    },
    base_total_refunded: {
      description: 'enter your description',
      type: GraphQLFloat,
    },
    billing_address: {
      description: 'Billing address',
      type: OrderAddressType,
      resolve: (obj, args, ctx) => {
        return obj.addresses.find(elem => elem.address_type == 'billing');
      },
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
      type: GraphQLFloat,
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
      type: GraphQLFloat,
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
      type: GraphQLFloat,
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
      type: GraphQLFloat,
    },
    increment_id: {
      description: 'enter your description',
      type: GraphQLString,
    },
    invoices: {
      description: 'enter your description',
      type: new GraphQLList(InvoiceType),
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
      type: new GraphQLList(OrderCommentType),
    },
    order_currency_code: {
      description: 'enter your description',
      type: GraphQLString,
    },
    order_items: {
      description: 'enter your description',
      type: new GraphQLList(OrderItemType),
    },
    /*
    order_items contains multiple items for each item ordered!  It has something to do with 'simple' and 'configurable' products.  It deserves careful consideration as to what is actually the best way to represent this to the graphql client.  As a partial hack, it turns out everything I need is in the parent order item, so, I am making this parent_order_items to filter out and discard the child items.  This assumes there is exactly one parent per item ordered.
      */
    parent_order_items: {
      description: 'order_items where parent_item_id == null',
      type: new GraphQLList(OrderItemType),
      resolve: (obj, args, ctx) => {
        return obj.order_items.filter(elem => elem.parent_item_id == null);
      },
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
      type: GraphQLFloat,
    },
    reward_points_balance: {
      description: 'enter your description',
      type: GraphQLString,
    },
    shipping_address: {
      description: 'Shipping address',
      type: OrderAddressType,
      resolve: (obj, args, ctx) => {
        return obj.addresses.find(elem => elem.address_type == 'shipping');
      },
    },
    shipping_amount: {
      description: 'enter your description',
      type: GraphQLFloat,
    },
    shipping_description: {
      description: 'enter your description',
      type: GraphQLString,
    },
    shipping_discount_amount: {
      description: 'enter your description',
      type: GraphQLFloat,
    },
    shipping_incl_tax: {
      description: 'enter your description',
      type: GraphQLFloat,
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
      type: GraphQLFloat,
    },
    status: {
      description: 'enter your description',
      type: OrderStatusEnum,
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
      type: GraphQLFloat,
    },
    subtotal_incl_tax: {
      description: 'enter your description',
      type: GraphQLFloat,
    },
    tax_amount: {
      description: 'enter your description',
      type: GraphQLFloat,
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
  type: new GraphQLList(OrderType),
  resolve: (obj, args, ctx) => {
    return OrderFetcher.getOrders(ctx.customerId);
  },
};
