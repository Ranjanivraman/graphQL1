
import {
  mgFetch,
  arrayByStrippingKeys,
  objectByStrippingKey,
} from './MGFetcher';

export const ProductFetcher = {
  getProductBySKU(sku) {
    const url = `https://api-test2.mgnonprod.co.uk/api/rest/products?filter[1][attribute]=sku&filter[1][in]=${sku}`;

    return mgFetch(url)
    .then(res => objectByStrippingKey(res));
  },

};
