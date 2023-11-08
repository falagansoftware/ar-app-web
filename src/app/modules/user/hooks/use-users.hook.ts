import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { UsersRepository } from '../../../shared/repositories/auto-repair-api';

export const useUsers = (criteria: any): UseQueryResult<any> => {
  return useQuery({
    queryKey: ['Users', criteria],
    queryFn: () => UsersRepository.find(criteria),
  });
};
