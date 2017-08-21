
import { mgFetchMany } from './MGFetcher';

export const OrderFetcher = {
  getOrdersByCustomerId(customerId) {
    // TODO: should do pagination, but not needed for prototype and besides I don't understand magento's wacky page parameter!
    const url = `https://api-test2.mgnonprod.co.uk/api/rest/orders?limit=99&order=created_at&dir=dsc&filter[1][attribute]=customer_id&filter[1][in]=${customerId}`;

    return mgFetchMany(url);
  },

};
