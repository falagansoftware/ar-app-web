export const UsersRepository = {
  find: async (criteria: any): Promise<any> => {
    const limitQuery = criteria.limit ? `?limit=${criteria.limit}` : '';
    const offsetQuery = criteria.offset ? `&offset=${criteria.offset}` : '';
    const sortByQuery = criteria.sortBy ? `&sortBy=${criteria.sortBy}` : '';
    const sortOrderQuery = criteria.sortOrder ? `&sortOrder=${criteria.sortOrder}` : '';
    const filtersQuery = new URLSearchParams(criteria.filters).toString();
    const response = await fetch(
      `http://localhost:3001/auto-repair-api/users/find${limitQuery}${offsetQuery}${sortByQuery}${sortOrderQuery}${filtersQuery}`,
    );
    return response.json();
  },
};
