import axios from 'axios';
import apiConfig from './config';
import {IMakeRequest, IMakeResponse} from './types';

const makeRequest = <Response = unknown>({
  headers = {},
  ...requestConfig
}: IMakeRequest): IMakeResponse<Response> => {
  return axios({
    baseURL: apiConfig.getBaseUrl(),
    headers,
    ...requestConfig,
  });
};

export default makeRequest;
