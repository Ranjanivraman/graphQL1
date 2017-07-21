
import {
  mgFetchOne,
} from './MGFetcher';

export const CustomerFetcher = {
  getCustomerById(customerId) {
    const url = `https://api-test2.mgnonprod.co.uk/api/rest/customers?limit=5&filter[1][attribute]=entity_id&filter[1][in]=${customerId}`;

    return mgFetchOne(url);
  },

  getCustomerByEmail(email) {
    const url = `https://api-test2.mgnonprod.co.uk/api/rest/customers?limit=5&filter[1][attribute]=email&filter[1][in]=${email}`;

    return mgFetchOne(url);
  },

};
