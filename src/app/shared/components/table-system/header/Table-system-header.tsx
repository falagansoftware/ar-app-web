import { Icon, Th, Thead, Tr } from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon, UpDownIcon } from '@chakra-ui/icons';
import React from 'react';
import { TableSystemColumn, TableSystemSort, TableSystemSortOrder } from '../Table-system.models';

export function TableSystemHeader({
  loading,
  columns,
  currentSort,
  onSort,
}: {
  loading: boolean;
  columns: any[];
  currentSort: TableSystemSort;
  onSort: ({ sortBy, sortOrder }: TableSystemSort) => void;
}) {
  function handleSortChange(column: TableSystemColumn) {
    if (!loading && column.sortable) {
      onSort({
        sortBy: column.data.key,
        sortOrder: setSortOrder(column),
      });
    }
  }

  function setSortOrder(column: TableSystemColumn) {
    if (currentSort.sortBy === column.data.key && currentSort.sortOrder) {
      if (currentSort.sortOrder === TableSystemSortOrder.ASC) {
        return TableSystemSortOrder.DESC;
      } else if (currentSort.sortOrder === TableSystemSortOrder.DESC) {
        return null;
      } else {
        return TableSystemSortOrder.ASC;
      }
    }
    return TableSystemSortOrder.ASC;
  }

  function setSortIcon(column: TableSystemColumn) {
    if (currentSort.sortBy === column.data.key && currentSort.sortOrder) {
      const icon = currentSort.sortOrder === TableSystemSortOrder.ASC ? ChevronUpIcon : ChevronDownIcon;
      return <Icon boxSize={4} float="right" as={icon} />;
    }
    return <Icon boxSize={2} float="right" as={UpDownIcon} marginTop={1} marginRight={1} />;
  }

  function setHeaderHover(column: TableSystemColumn) {
    if (loading || !column.sortable) {
      return {
        bg: '',
        cursor: 'not-allowed',
      };
    }
    return {
      bg: 'gray.50',
      cursor: 'pointer',
    };
  }

  function setHeaderColor(column: TableSystemColumn) {
    if (loading || !column.sortable) {
      return 'gray.100';
    }
    return '';
  }

  function setHeaderCursor(column: TableSystemColumn) {
    if (loading || !column.sortable) {
      return 'not-allowed';
    }
    return 'pointer';
  }

  return (
    <Thead>
      <Tr>
        {columns.map((column: TableSystemColumn, index) => (
          <Th
            key={index}
            onClick={() => handleSortChange(column)}
            _hover={setHeaderHover(column)}
            color={setHeaderColor(column)}
            cursor={setHeaderCursor(column)}
          >
            {column.header}
            {setSortIcon(column)}
          </Th>
        ))}
      </Tr>
    </Thead>
  );
}
