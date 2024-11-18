import axios, { AxiosError } from "axios";

export const AxiosClient = axios.create({
  baseURL: "/api",
  withCredentials: true,
});

// info: this is used for stopping spam request on client-side
let request_axios_table: { [key: string]: undefined | true } = {};
let error_time: number = 0; // ? this is for stopping the error function in axios from spamming

/*
 *
 *
 *
 *
 *
 *
 *
 * SPACE
 *
 *
 *
 *
 *
 *
 *
 */

//region: Request Interceptor
AxiosClient.interceptors.request.use(
  async function (request) {
    if (request.url) {
      request_axios_table[request.url] = true;
    }

    return request;
  },
  /*
   *
   * SPACE
   *
   */
  function (error) {
    request_axios_table = {};
    console.error("Request Error: ", error, typeof error, error.message);
  }
);

/**
 *
 *
 * SPACE
 *
 *
 */

// region: Response Interceptor
AxiosClient.interceptors.response.use(
  function (response) {
    if (response.config.url) {
      request_axios_table[response.config.url] = undefined;
    }

    return response;
  },
  /*
   *
   * SPACE
   *
   */
  function (error: AxiosError) {
    if (new Date().getTime() - error_time > 3000) {
      error_time = new Date().getTime();
    } else {
      return;
    }

    request_axios_table = {};

    return error;
  }
);
