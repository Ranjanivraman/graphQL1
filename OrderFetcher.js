
import { mgFetchMany } from './MGFetcher';

export const OrderFetcher = {
  getOrders(customerId) {
    // N.B. I've had to put a limit on the number of orders here because sometimes fetching many orders causes many many product fetches and somebody gets confused.  I don't know if it is this graphql server or the magento server.
    const url = `https://api-test2.mgnonprod.co.uk/api/rest/orders?limit=2&order=created_at&dir=dsc&filter[1][attribute]=customer_id&filter[1][in]=${customerId}`;

    return mgFetchMany(url);
  },

};
