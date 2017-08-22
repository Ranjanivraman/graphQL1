
import { mgFetchMany } from './MGFetcher';

export const OrderFetcher = {
  getOrdersByCustomerId(customerId, orderIds) {
    // TODO: should do pagination, but not needed for prototype and besides I don't understand magento's wacky page parameter!
    var url = `https://api-test2.mgnonprod.co.uk/api/rest/orders?limit=99&order=created_at&dir=dsc&filter[1][attribute]=customer_id&filter[1][in]=${customerId}`;

// TODO: specifying multiple orderIds only fetches the first...don't know how magento wants a list of orderIds
    if (orderIds !== undefined && orderIds !== null) {
      url += `&filter[2][attribute]=entity_id&filter[2][in]=${orderIds}`
    }
// https://api-test2.mgnonprod.co.uk/api/rest/orders?order=created_at&dir=asc&filter[1][attribute]=customer_id&filter[1][in]=6370316&filter[2][attribute]=entity_id&filter[2][in]=17741053,17741169


    return mgFetchMany(url);
  },

};
