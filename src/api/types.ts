import {AxiosRequestConfig, AxiosResponse} from 'axios';

export type IMakeRequest = Omit<AxiosRequestConfig, 'method'> & {
  url?: string;
  method: 'POST' | 'GET' | 'PUT' | 'DELETE' | 'PATCH';
  data?: unknown;
};

export type IMakeResponse<Response> = Promise<AxiosResponse<Response>>;
