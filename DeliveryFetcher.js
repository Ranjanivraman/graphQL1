
import {
  mgFetchOne,
} from './MGFetcher';

export const DeliveryFetcher = {
  getDelivery(orderId, postcode) {
    const url = `https://www.missguided.co.uk/ordertracker/index/post?order_id=${orderId}&postcode=${postcode}`;


    return mgFetchOne(url);
  },


};
