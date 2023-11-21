
import { useUsers } from '../../hooks/use-users.hook';
import { TableSystem } from '../../../../shared/components/table-system/Table-system';
import { USERS_TABLE_CONFIG } from './list.config';
import { Heading } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export function ListUsers() {
  const [activePage, setActivePage] = useState(1);
  const [activeSort, setActiveSort] = useState(USERS_TABLE_CONFIG.defaultSort);
  const { t } = useTranslation();

  const { data, isLoading, error } = useUsers({
    limit: USERS_TABLE_CONFIG.itemsPerPage,
    offset: (activePage - 1) * USERS_TABLE_CONFIG.itemsPerPage,
    sortBy: activeSort.sortBy,
    sortOrder: activeSort.sortOrder
  });

  if (error) {
    return <span>Error</span>;
  }

  return (
    <>
      <Heading as="h4" size="md" marginBottom={5}>
        {t('users.users')}
      </Heading>
      <TableSystem
        config={USERS_TABLE_CONFIG}
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


