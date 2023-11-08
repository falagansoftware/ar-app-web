import { Skeleton, Tbody, Td, Tr } from '@chakra-ui/react';
import React from 'react';
import { TableSystemColumn } from '../Table-system.models';

export function TableSystemRowsSkeleton({ rowsNumber, columns }: { rowsNumber: number; columns: TableSystemColumn[] }) {
  return (
    <Tbody>
      {[...Array(rowsNumber)].map((_, index) => (
        <Tr key={index}>
          {columns.map((column, index) => (
            <Td key={index}>
              <Skeleton height={4} width={Math.floor(Math.random() * (100 - 50 + 1) + 50) + 1 + '%'} />
            </Td>
          ))}
        </Tr>
      ))}
    </Tbody>
  );
}
