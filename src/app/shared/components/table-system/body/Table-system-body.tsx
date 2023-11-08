import { TableSystemRowsSkeleton } from '../skeletons/Table-rows-skeleton';
import { Tbody, Td, Tr } from '@chakra-ui/react';
import React from 'react';
import { TableSystemColumn } from '../Table-system.models';

export function TableSystemBody({
  loading,
  columns,
  data,
  rowDataKey,
  onRowClick,
}: {
  loading: boolean;
  columns: TableSystemColumn[];
  data: { result: any[]; total: number };
  rowDataKey: string;
  onRowClick: (row: any) => void;
}) {
  if (loading) {
    return <TableSystemRowsSkeleton rowsNumber={10} columns={columns} />;
  }

  return (
    <Tbody>
      {data.result.map((row, rowIndex) => (
        <Tr key={rowIndex} _hover={{ bg: 'gray.50', cursor: 'pointer' }} onClick={() => onRowClick(row)}>
          {Object.keys(row).map((key, keyIndex) => {
            if (columns.find((column) => column.data.key === key)) return <Td key={keyIndex}>{row[key]}</Td>;
          })}
        </Tr>
      ))}
    </Tbody>
  );
}
