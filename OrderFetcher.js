
import { mgFetchMany } from './MGFetcher';

export const OrderFetcher = {
  getOrders(customerId) {
    const url = `https://api-test2.mgnonprod.co.uk/api/rest/orders?filter[1][attribute]=customer_id&filter[1][in]=${customerId}`;

    return mgFetchMany(url);
  },

};
