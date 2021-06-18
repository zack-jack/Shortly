import axios from 'axios';

/**
 * Standard HTTP Handler
 * @type {Object}
 */
const XHR = axios.create();

/**
 * Pass data from response to promise
 * @param  {Object} data - response data property
 * @return {Object}
 */
const responseHandler = ({ data }) => data;

/**
 * Pass errors to promise
 * @param  {???} error - API error response
 * @return {Object}
 */
const errorHandler = ({ config, response, ...error }) => {
  let { msg, code } = error;

  if (!msg) {
    msg = 'There was an issue with your request. Please try again.';
  }

  if (!code) {
    code = '???';
  }

  return {
    error: msg,
    xhr: response.data,
    raw: response,
  };
};

/**
 * Post to XHR
 * @param  {String} url - endpoint url
 * @param  {Object} params - request parameters
 * @param  {Object} headers - request headers
 * @return {Promise}
 */
export const post = (url, params, headers) => XHR.post(url, params, headers)
  .then(responseHandler)
  .catch(errorHandler);

/**
 * Get to XHR
 * @param  {String} url - endpoint url
 * @param  {Object} params - request parameters
 * @param  {Object} headers - request headers
 * @return {Promise}
 */
export const get = (url, params, headers) => XHR.get(url, {
  params,
  headers,
})
  .then(responseHandler)
  .catch(errorHandler);

export default XHR;
