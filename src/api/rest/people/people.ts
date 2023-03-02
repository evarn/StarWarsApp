import makeRequest from '../../makeRequest';
import {IListPeopleRequest, ListPeopleRespone} from './types';
import apiConfig from '../../config';

export const getListPeople = async ({next}: IListPeopleRequest) => {
  apiConfig.setBaseUrl(next);
  return makeRequest<ListPeopleRespone>({
    method: 'GET',
  });
};
