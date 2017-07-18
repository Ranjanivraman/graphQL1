
import {
  mgFetch,
  arrayByStrippingKeys,
  objectByStrippingKey,
} from './MGFetcher';

export const CustomerFetcher = {
  getCustomers() {
    const url = 'https://api-test2.mgnonprod.co.uk/api/rest/customers?limit=5';

    return mgFetch(url)
    .then(res => res.json())
    .then(res => arrayByStrippingKeys(res));
  },

  getCustomerById(customerId) {
    const url = `https://api-test2.mgnonprod.co.uk/api/rest/customers?limit=5&filter[1][attribute]=entity_id&filter[1][in]=${customerId}`;

    return mgFetch(url)
    .then(res => res.json())
    .then(res => objectByStrippingKey(res));
  },

  getCustomerByEmail(email) {
    const url = `https://api-test2.mgnonprod.co.uk/api/rest/customers?limit=5&filter[1][attribute]=email&filter[1][in]=${email}`;

    return mgFetch(url)
    .then(res => res.json())
    .then(res => objectByStrippingKey(res));
  },

};
