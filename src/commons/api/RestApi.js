import config from '../../config';

/**
 * Converts object into a URL param for GET methods.
 *
 * @param  {Object} data
 * @return {String}
 */
const buildUrlParams = (data) => {
  if (!data) {
    return '';
  }

  const params = [];

  Object.keys(data).forEach((key) => {
    const value = data[key];

    if (value instanceof Array) {
      value.map((item) => {
        params.push(`${encodeURIComponent(key)}[]=${encodeURIComponent(item)}`);
        return item;
      });
    } else if (value && value !== '') {
      params.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
    }
  });

  return params.join('&');
};


/**
 * Checks the response's HTTP status and returns a response
 * or error accordingly.
 *
 * @param  {Object} response
 * @return {mixed}
 */
const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 400) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;

  throw error;
};

/**
 * Makes a HTTP request and returns a Promise.
 *
 * The `options` argument should adhere to the following signature:
 * {
 *  method: 'GET|POST|DELETE|PATCH|PUT|',
 *  data : {},
 *  headers: {}
 * }
 * @param {string} url
 * @param {object} options
 *
 * @return {Promise}
 */
const request = (url, options) => {
  const baseURL = config.apis.restapi.url;
  return fetch(baseURL + url).then(checkStatus);
};

/**
 * Make an API call to the specified rest api (golang) API endpoint.
 *
 * @param  {string} endpoint
 *
 * @return {Promise}
 */

const call = (url, method = 'GET', data = null, headers = {}) => {
  const options = {
    method,
    headers,
  };

  const builtUrl =
    method === 'GET' && data !== null ? `${url}?${buildUrlParams(data)}` : url;

  return new Promise((resolve, reject) => {
    // Request timeout.
    const requestTimeout = setTimeout(() => {
      reject(new Error('Request timeout.'));
    }, 5000);
    
    request(builtUrl, options)
      .then(response => response.json())
      .then((response) => {
        clearTimeout(requestTimeout);
        return response;
      })
      .then(response => resolve(response))
      .catch((error) => {
        if (error.response) {
          error.response.json().then((errorResponse) => {
            const appendedError = error;

            clearTimeout(requestTimeout);
            reject(appendedError.responseBody);
          });
        } else {
          clearTimeout(requestTimeout);
          reject(error);
        }
      });
  });
};

export default call;
