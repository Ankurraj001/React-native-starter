/* istanbul ignore file */
import axios from "axios";

/**
 * HttpClient : To interact with backend REST API's
 *
 * @namespace HttpClient
 *
 */
const HttpClient = (function () {
  /**
   * axios instance variable
   */
  let axiosInstance = null;

  class HttpClient {
    constructor() {
      /**
       * axios instance variable with basic configuration
       */
      axiosInstance = axios.create({
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        withCredentials: false,
      });
    }

    /**
     * method: GET
     *
     * @param { string}  url - url for the request
     * @param { object } params - query params
     * @param { object } headers - header object, if any else an empty object is the default value
     * @param { object } options - other optional parameters such as responseType, responseEncoding etc.
     * @returns {Promise<AxiosResponse>}
     */
    async get(url, params = {}, headers = {}, data = {}, options = {}) {
      /**
       * 1st parameter is the url
       * 2nd parameter is request config/options object
       */
      const response = await axiosInstance.get(url, {
        params,
        headers,
        data,
        ...options,
      });
      return response;
    }

    /**
     * method: POST
     *
     * @param { string } url - url for the request
     * @param { object } payload - request body
     * @param { object } headers - headers if required, default value an empty object
     * @param { object } params - params if required, default value an empty object
     * @returns {Promise<AxiosResponse>}
     */
    async post(url, payload = {}, headers = {}, params = {}, options = {}) {
      /**
       * 1st parameter is the url
       * 2nd parameter is the request body
       * 3rd parameter is request config/options object
       */
      const response = await axiosInstance.post(url, payload, {
        headers,
        params,
        ...options,
      });
      return response;
    }

    /**
     * method: PUT
     *
     * @param { string } url - url for the request
     * @param { object } payload - request body
     * @param { object } headers - headers if required, default value an empty object
     * @param { object } params - params if required, default value an empty object
     * @returns {Promise<AxiosResponse>}
     */
    async put(url, payload, headers = {}, params = {}) {
      /**
       * 1st parameter is the url
       * 2nd parameter is the request body
       * 3rd parameter is request config/options object
       */
      const response = await axiosInstance.put(url, payload, {
        headers,
        params,
      });
      return response;
    }

    /**
     * method: PATCH
     *
     * @param { string } url - url for the request
     * @param { object } payload - request body
     * @param { object } headers - headers if required, default value an empty object
     * @param { object } params - params if required, default value an empty object
     * @returns {Promise<AxiosResponse>}
     */
    async patch(url, payload, headers = {}, params = {}) {
      /**
       * 1st parameter is the url
       * 2nd parameter is the request body
       * 3rd parameter is request config/options object
       */
      const response = await axiosInstance.patch(url, payload, {
        headers,
        params,
      });
      return response;
    }

    /**
     * method: DELETE
     */
    async delete(url, payload, headers = {}) {
      const response = await axiosInstance.delete(url, payload, {
        headers,
      });
      return response;
    }
  }
  return new HttpClient();
})();

export default HttpClient;
