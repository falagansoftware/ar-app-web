import { httpClient } from '../../../http/http.client';
import { FindUsersCriteria, User } from './users.models';

export const usersRepository = () => {
  const apiBaseUrl = import.meta.env.VITE_AR_API_BASE_URL;
  return {
    find: async (criteria: FindUsersCriteria): Promise<User[]> => {
      const limitQuery = criteria.limit ? `?limit=${criteria.limit}` : '';
      const offsetQuery = criteria.offset ? `&offset=${criteria.offset}` : '';
      const sortByQuery = criteria.sortBy ? `&sortBy=${criteria.sortBy}` : '';
      const sortOrderQuery = criteria.sortOrder ? `&sortOrder=${criteria.sortOrder}` : '';
      const filtersQuery = new URLSearchParams(criteria.filters).toString();
      const result = await httpClient.get(
        `${apiBaseUrl}/users/find${limitQuery}${offsetQuery}${sortByQuery}${sortOrderQuery}${filtersQuery}`,
      );
      return result.data;
    },
  };
};
