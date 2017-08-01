import {
  mgFetchJSON,
} from './MGFetcher';
var inspect = require('object-inspect');

export const CustomerAddressFetcher = {
  getCustomerAddressesById(customerId) {
    const url = `https://api-test2.mgnonprod.co.uk/api/rest/customers/${customerId}/addresses`;
    console.log(url)
    const result = mgFetchJSON(url);
    console.log("-----")
    console.log(inspect(result))
    console.log("-----")
    return result;
  },

};
