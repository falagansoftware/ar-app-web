import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { UsersRepository } from '../../../shared/repositories/auto-repair-api';

export const useCustomers = (criteria: any): UseQueryResult<any> => {
  return useQuery({
    queryKey: ['Customers', criteria],
    queryFn: () => UsersRepository.find(criteria),
  });
};
