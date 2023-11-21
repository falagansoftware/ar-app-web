import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { usersRepository } from '../../../shared/repositories/auto-repair-api';
import { SearchCriteria } from '../../../shared/models/search-criteria.model';
import { User } from '../models/user.models';

export const useUsers = (criteria: SearchCriteria<User>): UseQueryResult<any> => {
  return useQuery({
    queryKey: ['Users', criteria],
    queryFn: () => usersRepository().find(criteria),
  });
};
