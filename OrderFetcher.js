import fetch from 'node-fetch';

const OAuth   = require('oauth-1.0a');
const util = require('util')
const crypto = require('crypto');

function hash_function_sha1(base_string, key) {
  return crypto.createHmac('sha1', key).update(base_string).digest('base64');
}


const OrderFetcher = {
  getOrders() {

    const request_data = {
      url: 'https://api-test2.mgnonprod.co.uk/api/rest/orders?limit=5&filter[1][attribute]=customer_id&filter[1][in]=6370473',
      method: 'GET',
    };

    const oauth = OAuth({
      consumer: {
        key: 'd6d2a046e79b37d5b4b7fffee62144e9',
        secret: '1c3b43d68392cfee91a8b8f519b2bcab'
      },
      signature_method: 'HMAC-SHA1',
      hash_function: hash_function_sha1
    });

    const token = {
      key: 'bb94a2a58b23d7611568d87a70735e4e',
      secret: 'dfe525ba3a8d2f57742b284d577ad493'
    };

    return fetch(request_data.url, {
      headers: oauth.toHeader(oauth.authorize(request_data, token))
      // used to also have:
      // {
      //   "content-type": "application/json",
      // },
    })
    .then(res => res.json())
    .then(res => {
      const result = Object.values(res)
      // console.log(JSON.stringify(result, null, 2))
      return result
    });

  },
};

export default OrderFetcher
