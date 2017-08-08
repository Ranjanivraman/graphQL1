import fetch from 'node-fetch';
const OAuth = require('oauth-1.0a');
const crypto = require('crypto');
var winston = require('winston');
winston.level = 'debug'


function hashFunctionSHA1(baseString, key) {
  return crypto.createHmac('sha1', key).update(baseString).digest('base64');
}

const oauth = OAuth({
  consumer: {
    key: 'd6d2a046e79b37d5b4b7fffee62144e9',
    secret: '1c3b43d68392cfee91a8b8f519b2bcab',
  },
  signature_method: 'HMAC-SHA1',
  hash_function: hashFunctionSHA1,
});

const token = {
  key: 'bb94a2a58b23d7611568d87a70735e4e',
  secret: 'dfe525ba3a8d2f57742b284d577ad493',
};

function getHeaders(requestData) {
  const headers = Object.assign({},
    {
      'content-type': 'application/json',
      'Accept': '*/*',
    },
    oauth.toHeader(oauth.authorize(requestData, token))
  );
  return headers
}

function checkHTTPStatus(res) {
  // FTM, only considering status 200 good...that could be overly restrictive
  if (res.status != 200) {
    // what do i throw????
    throw `BAD STATUS: ${res.status}`
  }
  return res
}

function logError(prefix, err) {
    winston.debug(prefix, err)
    throw err
}

function logResult(prefix, res) {
  winston.debug(prefix, res)
  return res
}

export function mgFetchJSON(url) {
  const requestData = {
    url: url,
    method: 'GET',
  };

  winston.debug(new Date(), `fetch from ${requestData.url}`)

  let result = fetch(requestData.url, {
    headers: getHeaders(requestData),
  })
  .catch(err => logError("mgFetchJSON, err: ", err))
  .then(res => checkHTTPStatus(res))
  .then(res => res.json())

  return result
}

export function mgPutJSON(url, jsonableObject) {

const requestData = {
  url: url,
  method: 'PUT',
};
const body = JSON.stringify(jsonableObject)

winston.debug(new Date(), requestData.url, body)

let result = fetch(requestData.url, {
  method: requestData.method,
  headers: getHeaders(requestData),
  body: body,
})
.then(res => checkHTTPStatus(res))
.catch(err => logError("mgPutJSON, err: ", err))
.then(res => logResult("mgPutJSON, res: ", res))

return result
}


export function arrayByStrippingKeys(obj) {
  return Object.values(obj);
}

export function objectByStrippingKey(obj) {
  const result = Object.values(obj);
  return result.length === 1 ? result[0] : {};
}

export function mgFetchMany(url) {
  return mgFetchJSON(url)
  .then(res => arrayByStrippingKeys(res))
}

export function mgFetchOne(url) {
  return mgFetchJSON(url)
  .then(res => objectByStrippingKey(res))
}
