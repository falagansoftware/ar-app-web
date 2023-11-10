import { TableSystemConfig, TableSystemSort } from './Table-system.models';
import { Table, TableContainer, useMediaQuery } from '@chakra-ui/react';

import { TableSystemHeader } from './header/Table-system-header';
import { TableSystemBody } from './body/Table-system-body';
import { TableSystemFooter } from './footer/Table-system-footer';
import { TableSystemVerticalView } from './vertical-view/Table-system-vertical-view';

export function TableSystem({
  config,
  data,
  currentPage,
  currentSort,
  loading,
  onPageChange,
  onSortChange,
  onRowClick,
}: {
  config: TableSystemConfig;
  data: { result: any[]; total: number };
  currentPage: number;
  currentSort: TableSystemSort;
  loading: boolean;
  onPageChange: (newPage: number) => void;
  onSortChange: ({ sortBy, sortOrder }: TableSystemSort) => void;
  onRowClick: (row: any) => void;
}) {
  const [isDesktop] = useMediaQuery('(min-width: 800px)');
  const { columns, rowDataKey, itemsPerPage, pagesToShow } = config;

  return isDesktop ? (
    <TableContainer>
      <Table __css={{ 'table-layout': 'fixed', width: 'full' }}>
        <TableSystemHeader
          loading={loading}
          columns={columns}
          currentSort={currentSort}
          onSort={(sort) => onSortChange(sort)}
        />
        <TableSystemBody
          loading={loading}
          columns={columns}
          data={data}
          rowDataKey={rowDataKey}
          onRowClick={(row) => onRowClick(row)}
        />
        <TableSystemFooter
          columnsNumber={columns.length}
          itemsPerPage={itemsPerPage}
          pagesToShow={pagesToShow}
          data={data}
          currentPage={currentPage}
          loading={loading}
          onPageChange={(newPage: number) => onPageChange(newPage)}
        />
      </Table>
    </TableContainer>
  ) : (
    <TableSystemVerticalView columns={columns} data={data} loading={loading} />
  );
}
