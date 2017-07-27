
import {
  mgFetchOne,
} from './MGFetcher';

const util = require('util')

export const CustomerFetcher = {
  getCustomerById(customerId) {
    const url = `https://api-test2.mgnonprod.co.uk/api/rest/customers?limit=5&filter[1][attribute]=entity_id&filter[1][in]=${customerId}`;

    return mgFetchOne(url);
  },

  getCustomerByEmail(email) {
    const url = `https://api-test2.mgnonprod.co.uk/api/rest/customers?limit=5&filter[1][attribute]=email&filter[1][in]=${email}`;

    return mgFetchOne(url)
    .then(res => {
      // TODO: very likely needs more bad data checking
      if (res["entity_id"] == null) {
        throw("invalid login")
      }
      return res
    }
  )
},

};
