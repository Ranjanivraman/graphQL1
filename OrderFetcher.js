
import { mgFetch, arrayByStrippingKeys } from './MGFetcher'

const url = 'https://api-test2.mgnonprod.co.uk/api/rest/orders?limit=5&filter[1][attribute]=customer_id&filter[1][in]=6370473'

export const OrderFetcher = {
  getOrders() {

    return mgFetch(url)
    .then(res => res.json())
    .then(res => arrayByStrippingKeys(res))
  }

}
