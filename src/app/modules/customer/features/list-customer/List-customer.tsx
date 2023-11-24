import { useCustomers } from '../../hooks/use-customers.hook';
import { TableSystem } from '../../../../shared/components/table-system/Table-system';
import { CUSTOMER_TABLE_CONFIG } from './list.config';
import { Heading } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export function ListCustomer() {
  const [activePage, setActivePage] = useState(1);
  const [activeSort, setActiveSort] = useState(CUSTOMER_TABLE_CONFIG.defaultSort);
  const { t } = useTranslation();

  const { data, isLoading } = useCustomers({
    limit: CUSTOMER_TABLE_CONFIG.itemsPerPage,
    offset: (activePage - 1) * CUSTOMER_TABLE_CONFIG.itemsPerPage,
    sortBy: activeSort.sortBy,
    sortOrder: activeSort.sortOrder,
  });

  return (
    <>
      <Heading as="h4" size="md">
        {t('users.users')}
      </Heading>
      <TableSystem
        config={CUSTOMER_TABLE_CONFIG}
        data={data}
        currentPage={activePage}
        currentSort={activeSort}
        loading={isLoading}
        onPageChange={(newPage) => setActivePage(newPage)}
        onSortChange={(newSort) => setActiveSort(newSort)}
        onRowClick={(row) => console.log(row)}
      />
    </>
  );
}
